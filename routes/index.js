const express = require('express');
const router = express.Router();

// Importing the User model.
router.get('/', (req, res) => {
    res.render("index")
});


module.exports = router;