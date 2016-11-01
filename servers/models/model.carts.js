const mongoose = require('mongoose');

let cartsSchema = new mongoose.Schema({
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
