const express = require ('express');
const router = express.Router ();
const userModel = require ('../models/user.models');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const cookieParser = require ('cookie-parser');
const cookie = require ('cookie');
const { generateToken } = require ('../utils/generateToken');
const { registerUser } = require ('../controllers/authController');
const { loginUser } = require ('../controllers/authController');


router.get ('/', (req, res) => {
    res.send ('Welcome to the users page');
});

router.post ('/register', registerUser);

router.post ('/login', loginUser);


module.exports = router;