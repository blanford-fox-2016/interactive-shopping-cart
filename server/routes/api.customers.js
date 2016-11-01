const express = require('express')
const router = express.Router()

// api customers controller
const controller = require('../controllers/api.customers')

/* show all customers lists */
router.get('/', controller.allCustomers)

/* process new customer */
router.post('/add', controller.addCustomer)

/* process edit customer */
router.put('/edit/:id', controller.editCustomer)

/* delete customer */
router.delete('/delete/:id', controller.deleteCustomer)

module.exports = router
