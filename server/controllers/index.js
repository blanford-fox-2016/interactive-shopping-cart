var Customer = require('../models/customer')

module.exports = {
    getCustomer: function (req, res) {
        Customer.find({}, function (err, customers) {
            if (err) {
                throw err
            }

            console.log(customers)
        })
    }
}