var express = require('express');
var router = express.Router();
var controller = require('../controllers/customerController')


/* GET home page. */
router.get('/', controller.customerList);
router.post('/', controller.customerCreate)
module.exports = router;
