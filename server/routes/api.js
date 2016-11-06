const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')
/* GET item listing. */
router.get('/item', controller.viewItems)
router.post('/item', controller.addItem)
router.get('/item/:id', controller.findEditItem)
router.put('/item/:id', controller.editItem)
router.delete('/item/:id', controller.removeItem)

router.get('/customer', controller.viewCustomers)
router.post('/customer', controller.addCustomer)
router.get('/customer/:id', controller.findEditCust)
router.put('/customer/:id', controller.editCustomer)
router.delete('/customer/:id', controller.removeCustomer)

module.exports = router;
