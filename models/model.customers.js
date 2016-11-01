const mongoose = require('mongoose')

let customerSchema = new mongoose.Schema({
  name      : String,
  memberID  : String,
  address   : String,
  zip       : String,
  phone     : String,
});

module.exports = Customers = mongoose.model('Customers', customerSchema);
