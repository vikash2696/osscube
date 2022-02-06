const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userID : {type : Number, unique :true, required : true},
    name : String,
    phone : Number
},
{versionKey : false});

//Model Object in collection users
const userModel = mongoose.model('Users',userSchema);

module.exports = userModel;