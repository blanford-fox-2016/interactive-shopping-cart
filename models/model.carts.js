const mongoose = require('mongoose');
const Schema = mongoose.Schema

let cartsSchema = new Schema({
  memberId        : {
    type: String,
    ref: 'Customers',
    foreignField: 'memberId'
  },
  total           : Number,
  transactionDate : Date,
  itemList        : [{
    itemCode      : {
      type: String,
      ref: 'Items',
      foreignField: 'itemCode'
    },
    qty       : Number,
    price     : Number
  }]
});

module.exports = Carts = mongoose.model('Carts', cartsSchema);
