'use strict'
const item = require('../models/item');
const customer = require('../models/customer');
const cart = require('../models/cart');

module.exports = {
    viewItems: function(req, res, next) {
        item.find({}, (err, data) => {
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
    editItem: function(req, res, next) {
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
        item.remove({
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
