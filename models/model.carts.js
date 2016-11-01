const mongoose = require('mongoose');

let cartsSchema = new mongoose.Schema({
  memberId        : {type: String, ref = 'Customers'},
  total           : Number,
  transactionDate : Date,
  itemList        : [{
    _id       : {type: Schema.Types.ObjectId, ref: 'Items'},
    qty       : Number,
    price     : Number
  }]
});

module.exports = Carts = mongoose.model('Carts', cartsSchema);
