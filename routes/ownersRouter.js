const express = require ('express');
const router = express.Router ();
const ownerModel = require ('../models/owners.models');


router.get ('/', (req, res) => {
    res.send ('Welcome to the owners page');
});


// if(process.env.Node === "development"){
//     console.log('Development Mode');
    // This Route For Creating New Owner
// }



// Check The Eneviroment
console.log(process.env.NODE_ENV);


if(process.env.NODE_ENV === "development"){
    console.log('Development Mode');
    // This Route For Creating New Owner
    router.post('/create', async function (req, res){

        let owner = await ownerModel.find();
        if(owner.length > 0){
            return res.status(400).json({message: "Owner already exists"});
        }

        let ownerCreated = await ownerModel.create({
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password,
            gestin: req.body.gestin
        }).then((owner) => {
            console.log('Owner created successfully');
            res.status(201).json({message: 'Owner created successfully', owner: owner});
        });


        res.status(201).send(ownerCreated);

        
});
}





module.exports = router;