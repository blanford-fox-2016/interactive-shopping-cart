const express = require('express');
const router = express.Router();
const cart = require('../controllers/cartController')

/* GET users listing. */
router.get('/', cart.all);
router.get('/:id', cart.one);
router.post('/', cart.add);
router.put('/:id', cart.edit);
router.delete('/:id', cart.destroy);

module.exports = router;
