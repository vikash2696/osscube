const router = require('express').Router();

const courseModel = require('../models/course');

router.post('/add', function(req, res) {
    console.log(req.body);
    const courseData = new courseModel(req.body);
    courseData.save().then((result) => {
        console.log('data saved succesfully');
        res.status(200).send({status : 'ok', result});
    }).catch((err) => {
        if(err) {
            res.status(400).send('Something went wrong');
        }
    })
});

module.exports = router;