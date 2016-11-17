//DATA WITH MONGOOSE MODEL

const Cart = require('../models/carts')
const Customer = require('../models/customers')
const Item = require('../models/items')

//CONTROLLING

module.exports = {
    //get all
    getDatas: (req, res) => {
        Cart
            .find({})
            .populate('customer itemList.item')
            .exec((err, data) => {
                if (err) res.status(400).json({ 'error': `Error: ${err}` })
                if (!data) res.status(404).json({ 'message': 'Failed to get all' })
                res.status(200).json(data)
            })
    },

    //post one
    postData: (req, res) => {
        Customer
            .findOne({ _id: req.body.customer_id })
            .exec((err, customer) => {
                let cart = new Cart({
                    transactionDate: req.body.transactionDate,
                    customer: customer._id
                })
                console.log('masuk di customer')
                if (req.body.item_id.length > 1 && req.body.qty.length > 1) {
                    for (let j in req.body.item_id) {
                        Item
                            .findOne({ _id: req.body.item_id[j] })
                            .exec((err, item) => {
                                cart.itemList.push({
                                    item: item._id,
                                    qty: req.body.qty[j]
                                })
                                if (j == req.body.item_id.length - 1) {
                                    cart.save((err, data) => {
                                        if (err) res.status(400).json({ 'error': `Error: ${err}` })
                                        res.status(200).json({ 'message': 'Add data successful', data })
                                    })
                                }
                            })
                    }
                } else {
                    console.log('masuk di item')
                    Item
                        .findOne({ _id: req.body.item_id })
                        .exec((err, item) => {
                            cart.itemList.push({
                                item: item._id,
                                qty: req.body.qty
                            })
                            cart.save((err, data) => {
                                if (err) res.status(400).json({ 'error': `Error: ${err}` })
                                res.status(200).json({ 'message': 'Add data successful', data })
                            })

                        })
                }

            })
    },

    //get one
    getData: (req, res) => {
        Cart
            .findOne({ _id: req.params.id })
            .populate('customer itemList.item')
            .exec((err, data) => {
                if (err) res.status(400).json({ 'error': `Error: ${err}` })
                if (!data) res.status(404).json({ 'message': 'Failed to get' })
                res.status(200).json(data)
            })
    },

    //delete one
    deleteData: (req, res) => {
        Cart
            .findOneAndRemove({ _id: req.params.id })
            .exec((err, data) => {
                if (err) res.status(400).json({ 'error': `Error: ${err}` })
                if (!data) res.status(404).json({ 'message': 'No data found' })
                res.status(200).json({ 'message': `Data ${req.params.id} has been deleted` })
            })
    },

    //update one
    updateData: (req, res) => {
        Customer
            .findOne({ _id: req.body.customer_id })
            .exec((err, customer) => {
                Cart
                    .findOne({ _id: req.params.id })
                    .exec((err, cart) => {
                        cart.customer = customer._id
                        cart.transactionDate = req.body.transactionDate
                        cart.itemList = []
                        for (let j in req.body.item_id) {
                            Item
                                .findOne({ _id: req.body.item_id[j] })
                                .exec((err, item) => {
                                    cart.itemList.push({
                                        item: item._id,
                                        qty: req.body.qty[j]
                                    })
                                    if (j == req.body.item_id.length - 1) {
                                        cart.save((err, data) => {
                                            if (err) res.status(400).json({ 'error': `Error: ${err}` })
                                            res.status(200).json({ 'message': 'Edit data successful', data })
                                        })
                                    }
                                })
                        }
                    })
            })
    }
}
