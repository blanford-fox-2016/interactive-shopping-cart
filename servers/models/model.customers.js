const mongoose = require('mongoose');

let customersSchema = new mongoose.Schema({
  name      : String,
  memberId  : String,
  address   : String,
  zip       : String,
  phone     : String,
});

module.exports = Customers = mongoose.model('Customer', customersSchema);
