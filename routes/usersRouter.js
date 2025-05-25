const express = require ('express');
const router = express.Router ();
const userModel = require ('../models/user.models');


router.get ('/', (req, res) => {
    res.send ('Welcome to the users page');
});

router.post ('/register', async function (req, res) {
    let { fullname, email, password } = req.body;

    let user = await userModel.create ({
        fullname,
        email,
        password,
    });

    res.send(user);

});



module.exports = router;