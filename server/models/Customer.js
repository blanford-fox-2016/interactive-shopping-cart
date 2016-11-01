const mongoose = require('mongoose');

let customerSchema = new mongoose.Schema({
  name: String,
  memberId: String,
  address: String,
  zip: String,
  phone: String
});

let customers = mongoose.model('customers', customersSchema)

module.exports = customers
