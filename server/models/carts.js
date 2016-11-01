var mongoose = require('mongoose');

var cartSchema = mongoose.Schema({
  memberId: {
  type: String,
  ref: 'customers',
  foreignField: 'memberId'
  },
  total: Number,
  transaction_date: {
    type: Date,
    default: Date.now
  },
  itemList: [
    {
      // _id: {
      //   type: Schema.Types.ObjectId,
      //   ref: 'items'
      // },
      itemCode: {
        type: String,
        ref: 'items',
        foreignField: 'itemCode'
      },
      qty: Number,
      price: Number
    }
  ]
  });

var cart = mongoose.model('cart', cartSchema);

module.exports = cart
