'use strict'

const mongoose = require('mongoose');
let connection = mongoose.createConnection('mongodb://localhost:27017/shopping-cart');
let custSchema = new mongoose.Schema({name: String, memberId: String, address: String, zip: String, phone: String});

let Customer = connection.model('Customer', custSchema);
module.exports = Customer
