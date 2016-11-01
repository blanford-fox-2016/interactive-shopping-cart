const mongoose = require('mongoose');

let itemsSchema = new mongoose.Schema({
  itemCode: String,
  name: String,
  description: String,
  price: INT,
  stock: INT
});

let items = mongoose.model('items', itemsSchema)

module.exports = items
