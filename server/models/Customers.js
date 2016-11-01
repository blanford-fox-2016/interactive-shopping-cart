'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

let customersSchema = new Schema({
  name      : String,
  memberId  : String,
  address   : String,
  zip       : Number,
  phone     : Number
})

module.exports = customersSchema.model('customers', customersSchema)
