const mongoose = require('mongoose'),
    Schema = mongoose.Schema

const Item = new Schema({
    name: String,
    price: Number,
    stock: Number
}, {
    timestamps: true
})

module.exports = mongoose.model('Item', Item)
