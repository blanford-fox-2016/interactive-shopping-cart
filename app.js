'use strict'

// EXPRESS DEPEDENCY
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//express instance
const app = express();
const router = express.Router();


// utilize bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// listening the app
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log('server is running on port ', port);
})
