const express = require('express');
const router = express.Router();

//api items controller
const controller = require('../controllers/api.items')

/* show all list items */
router.get('/', controller.allItems)

/* process new item */
router.post('/', controller.addItem)

/* process edit item */
router.put('/:id', controller.editItem)

/* process delete item */
router.delete('/:id', controller.deleteItem)

module.exports = router;
