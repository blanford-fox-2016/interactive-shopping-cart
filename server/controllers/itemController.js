let Item = require('../models/Item')

let all = () => {
  Item.find({}, (err, items) => {
    if (err) {
      console.log(err);
    } else {
      res.json(items);
    }
  })
}

let one = () => {
  Item.findById({
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
  Item.create({
    itemCode: req.body.itemCode,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock
  }, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.json(item);
    }
  })
}

let edit = () => {
  Item.update({
    _id: req.params.id
  }, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.json(item)
    }
  })
}

let destroy = () => {
  Item.remove({
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
