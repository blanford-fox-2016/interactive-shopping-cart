const express = require('express');
const router = express.Router();

//api controller
const controller = require('../controllers/api.items')

/* show all list items */
router.get('/', controller.allItems)

/* process new item */
router.post('/add', controller.newItem)

/* process edit item */
router.post('/add', controller.editItem)

module.exports = router;
