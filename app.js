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

const item = require('./controller/controller.items');
const chart = require('./controller/controller.items');

router.post('/', item.create);
router.post('/chart', chart.create)
router.post('/item', item.create)
router.get('/', item.list)
router.get('/:name', item.find)
router.post('/update/:name',item.update)
router.post('/delete/:name',item.delete)

app.use('/', router)


// listening the app
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log('server is running on port ', port);
})
