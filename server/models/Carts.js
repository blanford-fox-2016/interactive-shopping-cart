'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

let cartsSchema = new Schema({
  memberId          : {type: Schema.Types.ObjectId, ref: 'customers'},
  total             : Number,
  transaction_date  : {type: Date, default: Date.now},
  itemList          : [{type: Schema.Types.ObjectId, ref: 'items'}]
})

module.exports = mongoose.model('carts', cartsSchema)
