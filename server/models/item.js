'use strict'

const mongoose = require('mongoose');
let connection = mongoose.createConnection(process.env.DATABASE);
let itemSchema = new mongoose.Schema({
    itemCode: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
});

let Item = connection.model('items', itemSchema);
module.exports = Item
