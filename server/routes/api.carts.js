const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/api.carts')

// ROUTING
router.get('/carts', controller.getDatas)
router.post('/carts', controller.postData)
router.get('/carts/:id', controller.getData)
router.delete('/carts/:id', controller.deleteData)
router.put('/carts/:id', controller.updateData)

module.exports = router
