let Customer = require('../models/Customer')

let all = () => {
  Customer.find({}, (err, items) => {
    if (err) {
      console.log(err);
    } else {
      res.json(items);
    }
  })
}

let one = () => {
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

let add = () => {
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

let edit = () => {
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

let destroy = () => {
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
