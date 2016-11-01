'use strict'

const mongoose = require('mongoose');
let connection = mongoose.createConnection('mongodb://localhost:27017/shopping-cart');
let itemSchema = new mongoose.Schema({itemCode: String, name: String, description: String, price: Number, stock: Number});

let Item = connection.model('items', itemSchema);
module.exports = Item
