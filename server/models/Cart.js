const mongoose = require('mongoose')

let cartsSchema = new mongoose.Schema({
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
      itemCode: {
        type: String,
        ref: 'items',
        foreignField: 'itemCode'
      },
      qty: Number,
      price: Number
    }
  ]
},{
  timestamps: true
})

let carts = mongoose.model('carts', cartsSchema)

module.exports = carts
