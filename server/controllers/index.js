var Customer = require('../models/customer')

module.exports = {
    getCustomer: function (req, res) {
        Customer.find({}, function (err, customers) {
            if (err) {
                throw err
            }

            res.json(customers)
        })
    },

    createCustomer: function (req, res) {
        var customer = new Customer({
            name: req.body.name,
            memberId: req.body.memberId,
            address: req.body.address,
            zip: req.body.zip,
            phone: req.body.phone
        })
        customer.save(function (err, customer) {
            if (err) {
                throw err
            }

            res.json({
                status: "Customer di tambah",
                customer: customer
            })
        })
    },

    deleteCustomer: function (req, res) {
        Customer.findOneAndRemove({
            _id: req.params.id
        }, function (err, customer) {
            if (err) {
                throw err
            }

            res.json({
                status: "Customer di hapus",
                customer: customer
            })
        })
    }
}