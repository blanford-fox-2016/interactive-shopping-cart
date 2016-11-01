'use strict'

const mongoose = require('mongoose');
let connection = mongoose.createConnection('mongodb://localhost:27017/shopping-cart');
let cartSchema = new mongoose.Schema({memberId: String, total: Number, transaction_date: Date, itemList: Array});

let Cart = connection.model('Cart', cartSchema);
module.exports = Cart
