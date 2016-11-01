const express = require('express');
const router = express.Router();

//api items controller
const controller = require('../controllers/api.items')

/* show all list items */
router.get('/', controller.allItems)

/* process new item */
router.post('/add', controller.newItem)

/* process edit item */
router.put('/edit/:id', controller.editItem)

/* process delete item */
router.delete('/delete/:id', controller.deleteItem)

module.exports = router;
