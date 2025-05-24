const mongoose = require('mongoose');
const { type } = require('os');


const ownerSchema = new mongoose.Schema ({

    fullname : {
        type : String,
        required : true,
        index : true,
    },

    email : {
        type : String,
        required : true,
        unique : true,
    },

    password : {
        type : String,
        required : [true, 'Password is required'],
    },

    products : {
        type : Array,
        default : [],
    },

    picture : {
        type : String,
        // required : true,
    },

    gestin : {
        type : String,
        // required : true,
    },


});

module.exports = mongoose.model ('Owner', ownerSchema);