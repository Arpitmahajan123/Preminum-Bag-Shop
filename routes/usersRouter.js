const express = require ('express');
const router = express.Router ();
const userModel = require ('../models/user.models');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const cookieParser = require ('cookie-parser');
const cookie = require ('cookie');


router.get ('/', (req, res) => {
    res.send ('Welcome to the users page');
});

router.post ('/register', async function (req, res) {
    
    let { fullname, email, password } = req.body;

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

                let token = jwt.sign({ email, id: user._id }, "YoYoYoYoYoYoYoYo");
                res.cookie("token", token);
                res.send("User registered successfully");

            }

            // res.send (hash);
            
        });
    });
});


module.exports = router;