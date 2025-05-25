const mongoose = require('mongoose');
const { type } = require('os');


const userSchema = new mongoose.Schema ({

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


    // cart : {
    //     type : Array,
    //     default : [],
    // },

    // order : {
    //     type : Array,
    //     default : [],
    // },

    contact : {
        type : String,
        // required : true,
    },

    picture : {
        type : String,
        // required : true,
    },

});

module.exports = mongoose.model ('User', userSchema);