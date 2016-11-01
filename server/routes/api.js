var express = require('express');
var router = express.Router();
var controller = require('../controllers/customerController')


/* GET home page. */
router.get('/customer', controller.customerList);
router.post('/customer', controller.customerCreate);
module.exports = router;
