const express = require('express');
const router = express.Router();
const customer = require('../controllers/customerController')

/* GET users listing. */
router.get('/', customer.all);
router.get('/:id', customer.one);
router.post('/', customer.add);
router.put('/:id', customer.edit);
router.delete('/:id', customer.destroy);

module.exports = router;
