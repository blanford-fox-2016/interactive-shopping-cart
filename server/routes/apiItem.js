const express = require('express');
const router = express.Router();
const item = require('../controllers/itemController')

/* GET users listing. */
router.get('/', item.all);
router.get('/:id', item.one);
router.post('/add', item.add);
router.put('/:id/edit', item.edit);
router.delete('/:id/destroy', item.destroy);

module.exports = router;
