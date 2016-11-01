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
    },

    getCustomerEdit: function (req, res) {
        Customer.findOne({
            _id: req.params.id
        }, function (err, customer) {
            if (err) {
                throw err
            }

            res.json({
                status: "get customer",
                customer: customer
            })
        })
    },

    updateCustomer: function (req, res) {
        Customer.findByIdAndUpdate(
            req.params.id, {
                name: req.body.name,
                memberId: req.body.memberId,
                address: req.body.address,
                zip: req.body.zip,
                phone: req.body.phone
            },
            function (err) {
                console.log('updated!')
            }
        )
        Customer.findById(req.params.id, function (err, data) {
            if (err) throw err
            console.log('found it!!!!!!!!')
            res.json({
                status: "Customer di update",
                customer: data
            })
        })
    }
}