'use strict'

const mongoose = require('mongoose');
let connection = mongoose.createConnection(process.env.DATABASE);
let cartSchema = new mongoose.Schema({
    memberId: {
        type: String,
        ref: 'Customer',
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    transaction_date: {
        type: Date,
        default: Date.now
    },
    itemList: {
        type: Array,
        required: true
    }
});

let Cart = connection.model('Cart', cartSchema);
module.exports = Cart
