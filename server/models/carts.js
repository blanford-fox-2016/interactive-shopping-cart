const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Item = require('./items'),
    Customer = require('./customers'),
    moment = require('moment')

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
//
Cart.methods.toJSON = function() {
    var obj = this.toObject()
    obj.transactionDate = moment(obj.transactionDate).format('YYYY-MM-DD')
    return obj
};

module.exports = mongoose.model('Cart', Cart)
