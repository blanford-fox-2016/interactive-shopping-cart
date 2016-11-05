const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/api.items')

// ROUTING
router.get('/items', controller.getDatas)
router.post('/items', controller.postData)
router.get('/items/:id', controller.getData)
router.delete('/items/:id', controller.deleteData)
router.put('/items/:id', controller.updateData)

module.exports = router
