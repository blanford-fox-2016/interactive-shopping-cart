'use strict'

const mongoose = require('mongoose');
let connection = mongoose.createConnection(process.env.DATABASE);
let custSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    memberId: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

let Customer = connection.model('Customer', custSchema);
module.exports = Customer
