const express = require('express')
const router = express.Router()

// api customers controller
const controller = require('../controllers/api.customers')

/* show all customers lists */
router.get('/', controller.allCustomers)

/* process new customer */
router.post('/', controller.addCustomer)

/* process edit customer */
router.put('/:id', controller.editCustomer)

/* delete customer */
router.delete('/:id', controller.deleteCustomer)

module.exports = router
