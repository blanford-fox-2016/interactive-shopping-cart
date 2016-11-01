const mongoose = require('mongoose')

let cartSchema = new mongoose.Schema({
  memberID          : {
    type: String,
    ref: 'Customers',
    foreignField: 'memberID'
    },
  total           : Number,
  transactionDate : Date,
  itemList        : [{
    itemCode      : {
      type: String,
      ref: 'Items',
      foreignField: 'itemCode'
    },
  qty             : Number,
  price           : Number
    }]
  });

module.exports = Carts = mongoose.model('Carts', cartsSchema);
