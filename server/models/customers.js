const mongoose = require('mongoose'),
    Schema = mongoose.Schema

const Customer = new Schema({
    name: String,
    address: String,
    image: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Customer', Customer)