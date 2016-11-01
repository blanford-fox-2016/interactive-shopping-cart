'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

let itemSchema = new Schema({
  itemCode    : String,
  name        : String,
  description : String,
  price       : Number,
  stock       : Number
})


module.exports = mongooose.model('items', itemSchema)
