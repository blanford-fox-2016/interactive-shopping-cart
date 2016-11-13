let Customer = require('../models/Customer')

let all = (req, res, next) => {
  Customer.find({}, (err, items) => {
    if (err) {
      console.log(err);
    } else {
      res.json(items);
    }
  })
}

let one = (req, res, next) => {
  Customer.findById({
    _id: req.params.id
  }, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.json(item);
    }
  })
}

let add = (req, res, next) => {
  Customer.create({
    name: req.body.name,
    memberId: req.body.memberId,
    address: req.body.address,
    zip: req.body.zip,
    phone: req.body.phone
  }, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.json(item);
    }
  })
}

let edit = (req, res, next) => {
  Customer.update({
    _id: req.params.id
  },{
    name: req.body.name,
    memberId: req.body.memberId,
    address: req.body.address,
    zip: req.body.zip,
    phone: req.body.phone
  }, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.json(item)
    }
  })
}

let destroy = (req, res, next) => {
  Customer.remove({
    _id: req.params.id
  }, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.json(item)
    }
  })
}

module.exports = {
  all: all,
  one: one,
  add: add,
  edit: edit,
  destroy: destroy
}
