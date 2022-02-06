const router = require('express').Router();

const userModel = require('../models/user');

router.get('/users', function(req, res) {
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

router.get("/:userID", (req, res) => {
    userModel.find({ userID: req.params.userID }, (err, data) => {
      if (!err) {
        res.send(data[0]);
      } else {
        console.log(err);
        res.send("Something went wrong!!");
      }
    });
  });

router.post('/add', async (req, res) => {
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

router.patch('/user/update/:userID',async (req,res) => {
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
});

router.delete('/user/delete/:userID' , (req,res) => {
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

module.exports = router;