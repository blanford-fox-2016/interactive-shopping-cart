const mongoose = require('mongoose')

let itemsSchema = new mongoose.Schema({
  itemCode    : {
    type : String,
    unique : true
  },
  name        : String,
  description : String,
  price       : Number,
  stock       : Number
});

module.exports = Items = mongoose.model('Items', itemsSchema);
