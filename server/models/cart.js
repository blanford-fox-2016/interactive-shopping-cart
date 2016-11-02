var mongoose = require('mongoose');

// create a schema
var cartSchema = new mongoose.Schema({
    memberId: String,
    total: Number,
    transactionDate: Date,
    itemList: [
        {
            itemCode: String,
            qty: Number,
            price: Number
        }
    ]

});

var Cart = mongoose.model('carts', cartSchema)

module.exports = Cart