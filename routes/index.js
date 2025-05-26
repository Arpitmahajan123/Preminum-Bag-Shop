const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const flash = require('flash')

// Assuming you have a User model defined in models/user.models.js


// Importing the User model.

router.get('/', (req, res) => {
    let error = req.flash("error");
    res.render("index.ejs", { error });
});

// Importing the user routes.

router.get("/shop", isLoggedIn, function (req, res) {
    res.render("shop");
});





module.exports = router;