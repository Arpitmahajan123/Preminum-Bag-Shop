const mongoose = require('mongoose');
const { type } = require('os');

const productSchema = new mongoose.Schema ({

    image : {
        type : String,
        required : true,
    },

    prodName : {
        type : String,
        required : true,
    },

    price : {
        type : Number,
        required : true,
    },

    discount : {
        type : Number,
        default : 0,
    },

    bgcolor : {
        type : String,
        required : true,
    },

    pannelcolor : {
        type : String,
        required : true,
    },

    textcolor : {
        type : String,
        required : true,
    },

});


export const Product = mongoose.model ('Product', productSchema);