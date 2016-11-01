const express = require('express');
const router = express.Router();
const customer = require('../controllers/customerController')

/* GET users listing. */
router.get('/', customer.all);

module.exports = router;
