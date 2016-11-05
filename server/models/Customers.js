'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

let customersSchema = new Schema({
  name      : String,
  memberId  : String,
  address   : String,
  zip       : Number,
  phone     : Number
},{
  timestamps: true
})

module.exports = mongoose.model('customers', customersSchema)
