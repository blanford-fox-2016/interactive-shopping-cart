const mongoose = require('mongoose')

let itemsSchema = new mongoose.Schema({
  itemCode    : String,
  name        : String,
  description : String,
  price       : Number,
  stock       : Number
});

module.exports = Items = mongoose.model('Items', itemsSchema);
