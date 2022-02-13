const express = require("express");
var app = express();
const path = require("path");
require("dotenv").config();

require("./db");
app.use(express.json()); //middleware

const Router = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // zade, html

const PORT = process.env.PORT || 3000;

app.use(Router);

app.get("/", (req, res) => {
  res.render("index",{
      title : 'hello , i am passing this from app.js'
  });
});

app.listen(PORT, function () {
  console.log("Application is running on port:  3000");
});
