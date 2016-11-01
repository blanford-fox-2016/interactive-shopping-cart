const mongoose = require('mongoose');

let cartsSchema = new mongoose.Schema({
  memberId: {type: mongoose.Schema.objectId, ref: 'customers'},
  total: Number,
  transaction_date: Date,
  itemList: [{
    _id: {type: mongoose.Schema.objectId, ref: 'items'}
  }]
});

let carts = mongoose.model('carts', cartsSchema)

module.exports = carts
