const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/api.customers')

// ROUTING
router.get('/customers', controller.getDatas)
router.post('/customers', controller.postData)
router.get('/customers/:id', controller.getData)
router.delete('/customers/:id', controller.deleteData)
router.put('/customers/:id', controller.updateData)

module.exports = router
