const mongoose = require('mongoose');

let customersSchema = new mongoose.Schema({
  name      : String,
  memberId  : {
    type : String,
    unique : true
  },
  address   : String,
  zip       : String,
  phone     : String,
});

module.exports = Customers = mongoose.model('Customer', customersSchema);
