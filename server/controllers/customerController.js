var customer = require('../models/customers')

module.exports = {
  customerList: function(req, res, next) {
    customer.find(function (err, customer) {
      if (err) return console.error(err);
      res.render('listCustomer', { customer });
    })
  }, // end function user list
  customerCreate: function(req, res, next) {
    console.log(req.body);
    customer.create({
      memberId: req.body.memberId,
      name: req.body.name,
      address: req.body.address,
      zip: req.body.zip,
      phone: req.body.phone
    })
    res.redirect('/api/customer')
    // var newCustomer = customer({
      // memberId: req.body.memberId,
      // name: req.body.name,
      // address: req.body.address,
      // zip: req.body.zip,
      // phone: req.body.phone
    // })
    //
    // newCustomer.save(function(err){
    //   if (err) {
    //     throw err
    //   }else{
    //     console.log('Customer created!');
    //   }
    // })
  }
}
