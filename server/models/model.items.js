const mongoose = require('mongoose')

let itemSchema = new mongoose.Schema({
    itemCode   : String,
    name        : String,
    description : String,
    price       : Number,
    stock       : Number
});

module.exports = Items = mongoose.model('Items', itemSchema);
