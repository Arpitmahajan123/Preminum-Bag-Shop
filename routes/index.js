const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/isLoggedIn');

// Importing the User model.
router.get('/', (req, res) => {
    res.render("index")
});

// Importing the user routes.
router.get("/shop", isLoggedIn, function (req, res) {
    res.render("shop");
});


module.exports = router;