var customer = require('../models/customers')

module.exports = {
  customerList: function(req, res, next) {
    customer.find(function (err, customer) {
      if (err) console.error(err);
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
  }, // end of customerCreate
  customerDelete: function (req, res, next){
    var id = req.body.id
    customer.findOneAndRemove({ memberId : id }, function(err) {

      if (!err){
        res.json(id)
      }else{
        console.log("there something error");
      }

    });
  },
  getCustomerUpdate: function (req,res,next){
    console.log(req.param('id'));
    var id = req.param('id')
    customer.findOne({ memberId : id }, function(err, customer){
      if(!err){ res.json(customer) }else{ console.log("error bro!"); }
    })
  },
  customerUpdate: function (req,res,next){
    console.log();
    var data = JSON.parse(req.body.data)

    customer.findOneAndUpdate({ memberId: data.memberId }, { name: data.name, address: data.address, zip: data.zip, phone: data.phone }, function(err, data) {
      if (err) throw err;
      // we have the updated user returned to us
      customer.findById(data._id, (err, data_updated) => {

        console.log(data_updated);
        res.json(data_updated)
      })
    });
  }

}
