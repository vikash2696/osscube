const express =  require('express');
var app = express();
const mongoose = require("mongoose");
app.use(express.json()); //middleware
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const URL = process.env.url;


mongoose.connect(URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
}).then(() => {
    console.log('Database conneted');
})
.catch((err) => {
    console.log(err);
});

const userSchema = new mongoose.Schema({
    userID : {type : Number, unique :true, required : true},
    name : String,
    phone : Number
},
{versionKey : false});

//Model Object in collection users
const userModel = mongoose.model('Users',userSchema);

app.get('/',(req,res) => {
    res.send('Welcome to node application!');
});

app.get('/users', function(req, res) {
    userModel.find({},(err, data) => {
        if(!err) {
            console.log(data);
            res.status(200).send({status : 'ok', data});
        }else {
            console.log(err);
            res.status(400).send('Something went wrong');
        }
    })
});
app.post('/user/add', async (req, res) => {
    console.log(req.body);
    const UserData = new userModel(req.body);
    await UserData.save().then((result) => {
        console.log('data saved succesfully');
        res.status(200).send({status : 'ok', result});
    }).catch((err) => {
        if(err) {
            res.status(400).send('Something went wrong');
        }
    })
    
});

app.patch('/user/update/:userID',async (req,res) => {
    const userID = req.params.userID;
    console.log(userID);
    await userModel.findOneAndUpdate({userID}, req.body,{upsert : false})
    .then((result) => {
        console.log('Data updated');
        res.status(200).send({status : 'ok', result});
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send('something went wrong');
    });
    console.log('kdhgkhdkhsds');
});
app.delete('/user/delete/:userID' , (req,res) => {
    console.log('in delete');
    const userID = req.params.userID;
    userModel.deleteOne({userID})
    .then(() => {
        res.status(200).send({status : 'ok', msg : 'deleted'});
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send('something went wrong');
    });
});


app.listen(PORT, function () {
    console.log('Application is running on port:  3000');
})