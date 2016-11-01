'use strict'

const express = require('express');
const router = express.Router();

// require item controller
const controller = require('../controller/controller.customers');


router.get('/', controller.list);
router.get('/find/:name', controller.find);
router.delete('/delete/:name', controller.delete);
router.put('/update/:name', controller.update);
router.post('/create/', controller.create);


module.exports = router ;
