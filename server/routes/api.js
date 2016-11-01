var express = require('express');
var router = express.Router();
var customerController = require('../controllers/customerController')
var itemController = require('../controllers/itemController')
var cartController = require('../controllers/cartController')

/* GET home page. */
router.get('/customer', customerController.customerList);
router.post('/customer', customerController.customerCreate);
router.delete('/customer', customerController.customerDelete);

/* route for item */
// router.get('/item', controller.itemList);
// router.post('/item', controller.itemCreate);
// router.delete('/item', controller.itemDelete);
// router.put('/item', controller.itemUpdate);

/* route for cart */
// router.get('/cart', controller.cartList);
// router.post('/cart', controller.cartCreate);
// router.delete('/cart', controller.cartDelete);
// router.put('/cart', controller.cartUpdate);

module.exports = router;
