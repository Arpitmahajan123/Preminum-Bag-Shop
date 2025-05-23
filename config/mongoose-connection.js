const mongoose = require('mongoose');
const debgr = require('debug')("dev:mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Bags')
.then(function(){
    debgr('Connected to MongoDB');
})
.catch(function(err){
    console.log(err);
})

// Mongoose Conncetion Ke Through Aapko Database ka Pura Control Milta Hai.
module.exports = mongoose.connection;