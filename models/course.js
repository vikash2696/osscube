const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseID : {type : Number, required : true},
    userID : Number,
    courseName : String
},
{versionKey : false});

//Model Object in collection users
const courseModel = mongoose.model('Course',courseSchema);

module.exports = courseModel;