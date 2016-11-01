var customer = require('../models/customers')

module.exports = {
  customerList: function(req, res, next) {
    customer.find(function (err, customer) {
      if (err) return console.error(err);
      res.json(customer)
    })
  }, // end function user list
  customerCreate: function(req, res, next) {
    console.log("data masuk neh");
    var data = JSON.parse(req.body.data);
    console.log(" ini data customer : ", data.memberId);

    customer.create({
      memberId: data.memberId,
      name: data.name,
      address: data.address,
      zip: data.zip,
      phone: data.phone
    }).then(function(data){
      res.json(data)
    })
  } // end of customerCreate
}
