'use strict'

const mongoose = require('mongoose');
let connection = mongoose.createConnection(process.env.DATABASE);
let cartSchema = new mongoose.Schema({
    memberId: [
        {
            type: String,
            ref: 'Customer'
        }
    ],
    total: Number,
    transaction_date: Date,
    itemList: Array
});

let Cart = connection.model('Cart', cartSchema);
module.exports = Cart
