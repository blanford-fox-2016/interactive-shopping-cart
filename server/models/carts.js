const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Item = require('./items'),
    Customer = require('./customers')

const Cart = new Schema({
    transactionDate: Date,
    itemList: [{
        item: {
        	type: Schema.Types.ObjectId,
        	ref: 'Item'
        },
        qty: Number
    }],
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Cart', Cart)
