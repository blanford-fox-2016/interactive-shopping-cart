'use strict'
const Customers = require('../models/Customers')

let allCustomers = (req, res, next) => {
  Customers.find({}, (err, all_Customers) => {
    if(err) {
      console.log(err)
      res.send(err)
    }else{
      console.log(`show all Customers`)
      res.json(JSON.parse(all_Customers))
    }
  }).sort({_id: -1}) // desc
}

let addCustomer = (req, res, next) => {
  Customers.create({
    name        : req.body.name,
    memberId    : req.body.memberId,
    address     : req.body.address,
    zip         : req.body.zip,
    phone       : req.body.phone
  }, (err, new_Customer) => {
    if(err){
      console.log(err)
      res.send(err)
    }else{
      console.log(`${new_Customer} has been created`);
      res.json(JSON.parse(new_Customer))
    }

  })
}

let editCustomer = (req, res, next) => {
  Customers.update({
    _id : req.params.id
  }, req.body,
  (err, edited_Customer) => {
    if(err){
      console.log(err)
      res.send(err)
    }else{
      console.log(`${edited_Customer} has been edited`)
      res.json(JSON.parse(edited_Customer))
    }
  })
}

let deleteCustomer = (req, res, next) => {
  Customers.findById(req.params.id,
    (err, delete_Customer) => {
    if(err) {
      console.log(err)
      res.send(err)
    }else{
      delete_Customer.remove((err) => {
        if(err){
          console.log(err)
          res.send(err)
        }else{
          console.log(`${delete_Customer} has been deleted`)
          res.json(JSON.parse(delete_Customer))
        }
      })
    }
  })
}

module.exports = {
  allCustomers  : allCustomers,
  addCustomer   : addCustomer,
  editCustomer  : editCustomer,
  deleteCustomer: deleteCustomer
}
