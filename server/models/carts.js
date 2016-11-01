var mongoose = require('mongoose');

var cartSchema = mongoose.Schema({
    "memberId" : String,
    "total" : String,
    "transaction_date" : Date,
    "itemlist" : {
      "itemCode" : String,
      "qty" : Number,
      "price" : Number
    }
});

var cart = mongoose.model('cart', cartSchema);

module.exports = cart
