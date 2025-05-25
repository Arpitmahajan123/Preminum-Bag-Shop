const userModel = require ('../models/user.models');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const cookieParser = require ('cookie-parser');
const cookie = require ('cookie');
const { generateToken } = require ('../utils/generateToken');

module.exports.registerUser = async function (req, res) {
    
    let { fullname, email, password } = req.body;

    // Checking If User Is Already Registered or Not.

    let user = await userModel.findOne ({ email : email });

    if (user) {
        return res.status (400).send ('User already exists');
    }



    bcrypt.genSalt (10, async function (err, salt){
        bcrypt.hash (password, salt, async function (err, hash) {
            if (err) {
                return res.status (500).send ('Error hashing password');
            }
            else {

                let user = await userModel.create ({
                    email,
                    password : hash,
                    fullname,
                });

                // res.send(user);
                // password = hash;

                // Appltying JWT token here
                
                // let token = jwt.sign({ email, id: user._id }, "YoYoYoYoYoYoYoYo");
                const token = generateToken(user);
                res.cookie("token", token);
                res.send("User registered successfully");

            }

            // res.send (hash);
            
        });
    });
};

module.exports.loginUser = async function (req, res) {
    
    // Extracting User Details from Request Body.
    let { email, password } = req.body;

    // Checking If User Is Already Registered or Not.

    let user = await userModel.findOne ({ email : email });

    if (!user) {
        return res.status (400).send ('User does not exist');
    }

    // Comparing Passwords

    bcrypt.compare (password, user.password, function (err, result) {
        if (err) {
            return res.status (500).send ('Error comparing passwords');
        }
        if (!result) {
            return res.status (400).send ('Invalid password');
        }

        // Appltying JWT token here
        const token = generateToken(user);
        res.cookie("token", token);
        res.send("User logged in successfully");


    });
};

