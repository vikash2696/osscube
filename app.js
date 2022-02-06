const express =  require('express');
var app = express();
require("dotenv").config();

require('./db');
app.use(express.json()); //middleware

const Router = require('./routes/index');

const PORT = process.env.PORT || 3000;

app.use(Router);

app.get('/',(req,res) => {
    res.send('Welcome to node application!');
});

app.listen(PORT, function () {
    console.log('Application is running on port:  3000');
})