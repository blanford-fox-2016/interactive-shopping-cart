var express = require('express');
var router = express.Router();
var controller = require('../controllers/index')

router.get('/customer', controller.getCustomer)

router.post('/customer/create', controller.createCustomer)

router.delete('/customer/delete/:id', controller.deleteCustomer)

module.exports = router;