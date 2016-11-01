const express = require('express');
const router = express.Router();
const item = require('../controllers/itemController')

/* GET users listing. */
router.get('/', item.all);
router.get('/:id', item.one);
router.post('/', item.add);
router.put('/:id', item.edit);
router.delete('/:id', item.destroy);

module.exports = router;
