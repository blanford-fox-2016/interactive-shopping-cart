'use strict'

//**EXPRESS DEPEDENCY**//
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


//**EXPRESS INSTANCE**//
const app = express();
const router = express.Router();


//**REQUIRE MONGOOSE**//
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/database")


//**UTILIZE BODY PARSER**//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//**LISTENING THE APP**//
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log('SERVER is running on port ', port);
})
