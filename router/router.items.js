'use strict'

const express = require('express');
const router = express.Router();

// require item controller
const controller = require('../controller/controller.items');


router.get('/', controller.list);
router.get('/find/:name', controller.find);
router.get('/delete/:name', controller.delete);
router.post('/update/:name', controller.update);
router.post('/create/', controller.create);


module.exports = router;
