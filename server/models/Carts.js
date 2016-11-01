'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

let cartsSchema = new Schema({
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
})

module.exports = mongoose.model('carts', cartsSchema)
