const express = require('express')
const router = express.Router()

//api cart controller
const controller = require('../controllers/api.carts')

/* show all list carts */
router.get('/', controller.allCarts)

/* process new cart */
router.post('/add', controller.addCart)

/* process edit cart */
router.put('/edit/:id', controller.editCart)

/* delete cart */
router.delete('/delete/:id', controller.deleteCart)

module.exports = router
