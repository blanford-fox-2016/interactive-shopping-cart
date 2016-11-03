var cart = require('../models/carts')

module.exports = {
  cartList: function(req, res, next) {
    cart.find(function (err, cart) {
      if (err) return console.error(err);
      res.json(cart)
    })
  }, // end function user list
  cartCreate: function(req, res, next) {

    cart.create({
      memberId: data.memberId,
      total: data.total,
      transaction_date: data.transaction_date,
      itemlist: data.itemlist
    }).then(function(data){
      res.json(data)
    })

  }, // end of cartCreate
  cartDelete: function (req, res, next){
    res.json("success");
  },
  cartUpdate: function (req,res,next){
    res.json("success");
  }

}
