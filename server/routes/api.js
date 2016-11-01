var express = require('express');
var router = express.Router();
var customerController = require('../controllers/customerController')
var itemController = require('../controllers/itemController')
var cartController = require('../controllers/cartController')

/* GET home page. */
router.get('/customer', customerController.customerList);
router.get('/customer/update', customerController.getCustomerUpdate);
router.post('/customer', customerController.customerCreate);
router.put('/customer', customerController.customerUpdate);
router.delete('/customer', customerController.customerDelete);


/* route for item */
router.get('/item', itemController.itemList);
router.post('/item', itemController.itemCreate);
router.delete('/item', itemController.itemDelete);
router.put('/item', itemController.itemUpdate);

/* route for cart */
// router.get('/cart', controller.cartList);
// router.post('/cart', controller.cartCreate);
// router.delete('/cart', controller.cartDelete);
// router.put('/cart', controller.cartUpdate);

module.exports = router;
