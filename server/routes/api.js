const express = require('express');
const router = express.Router();

//api controller
const controller = require('../controllers/api')

/* GET home page. */
router.get('/', controller.functionName);

module.exports = router;
