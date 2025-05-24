const mongoose = require('mongoose');
const debgr = require('debug')("dev:mongoose");
const config = require('config');
const dbURI = config.get('MONGODB_URI');
require('dotenv').config();


mongoose
.connect(dbURI)
.then(function(){
    debgr('Connected to MongoDB');
})
.catch(function(err){
    debgr(err);
})

// Mongoose Conncetion Ke Through Aapko Database ka Pura Control Milta Hai.
module.exports = mongoose.connection;