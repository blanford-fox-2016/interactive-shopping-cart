'use strict'

// EXPRESS DEPEDENCY
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//express instance
const app = express();
const router = express.Router();

// require mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/database")

// utilize bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Register router
const items = require('./router/router.items');
const costumers = require('./router/router.customers');
const carts = require('./router/router.carts');


app.use('/carts',carts)
app.use('/item', items)
app.use('/customer',costumers)

// listening the app
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log('server is running on port ', port);
})
