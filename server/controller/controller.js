'use strict'
const item = require('../models/item');
const customer = require('../models/customer');
const cart = require('../models/cart');

module.exports = {
    viewItems: function(req, res, next) {
        item.find({}, (err, data) => {
            console.log(data);
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },
    addItem: function(req, res, next) {
        item.create({
            itemCode: req.body.itemCode,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock
        }, (err, data) => {
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },
    findEditItem: function(req, res, next) {
        console.log(req.params.id);
        item.find({
            _id: req.params.id
        }, (err, data) => {
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },
    editItem: function(req, res, next) {
        console.log(req.body);
        item.update({
            _id: req.params.id
        }, {
            itemCode: req.body.itemCode,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock
        }, (err, data) => {
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },
    removeItem: function(req, res, next) {
        console.log(req.params.id);
        item.remove({
            _id: req.params.id
        }, (err, data) => {
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },
    viewCustomers: function(req, res, next) {
        customer.find({}, (err, data) => {
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },
    addCustomer: function(req, res, next) {
        customer.create({
            name: req.body.name,
            memberId: req.body.memberId,
            address: req.body.address,
            zip: req.body.zip,
            phone: req.body.phone
        }, (err, data) => {
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },
    editCustomer: function(req, res, next) {
        customer.update({
            _id: req.params.id
        }, {
            name: req.body.name,
            memberId: req.body.memberId,
            address: req.body.address,
            zip: req.body.zip,
            phone: req.body.phone
        }, (err, data) => {
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },
    removeCustomer: function(req, res, next) {
        customer.remove({
            _id: req.params.id
        }, (err, data) => {
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    }
}
