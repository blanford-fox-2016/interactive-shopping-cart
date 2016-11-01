let Cart = require('../models/Cart')

let all = (req, res, next) => {
  Cart.find({}, (err, items) => {
    if (err) {
      console.log(err);
    } else {
      res.json(items);
    }
  })
}

let one = (req, res, next) => {
  Cart.findById({
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
  Cart.create({
    memberId: req.body.memberId,
    total: req.body.total,
    transaction_date: req.body.transaction_date,
    itemList: req.body.itemList
  }, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.json(item);
    }
  })
}

let edit = (req, res, next) => {
  Cart.update({
    _id: req.params.id
  },{
    memberId: req.body.memberId,
    total: req.body.total,
    transaction_date: req.body.transaction_date,
    itemList: req.body.itemList
  }, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.json(item)
    }
  })
}

let destroy = (req, res, next) => {
  Cart.remove({
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
