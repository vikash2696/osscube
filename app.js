const express =  require('express');
var app = express();
let data = require('./data.json');
console.log('data in start', data);
const fs = require('fs');
app.use(express.json()); //middleware

app.get('/',(req,res) => {
    res.send('Welcome to node application!');
})
app.get('/users', function(req, res) {
    res.status(200).send(data);
});
app.post('/user/add', (req, res) => {
    console.log(req.body);
    if(data && data.length > 0) {
        data.push(req.body);
    }else {
        console.log('else part');
        data = [req.body];
    }

    fs.writeFile('data.json',JSON.stringify(data), (err) => {
        if(err) {
            throw err
        };
        console.log('Record created sucessfully');
    });
    res.status(200).send({msg : 'OK', data});
    
});


app.listen(3000, function () {
    console.log('Application is running on port:  3000');
})