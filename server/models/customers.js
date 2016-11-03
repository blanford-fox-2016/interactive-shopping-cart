var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    "memberId": String,
    "name" : String,
    "address" : String,
    "zip" : Number,
    "phone" : String
});

var customer = mongoose.model('customer', customerSchema);

module.exports = customer
