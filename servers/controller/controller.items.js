'use strict'

const data = require('../models/model.items');

let Items = {
  create : (req, res) => {
    data.create({
      itemCode    : req.body.itemCode,
      name        : req.body.name,
      description : req.body.description,
      price       : req.body.price,
      stock       : req.body.stock
    }, (err, data) => {
      err ? res.send(err) : res.json(data);
    })
  },

  list : (req, res) => {
    data.find({}, (err, data) => {
      err ? res.send(err) : res.json(data)
    });
  },

  find : (req, res) => {
    data.find({name : req.params.name}, (err, data) => {
      err ? res.send(err) : res.json(data);
    })
  },

  update : (req, res) => {
    data.findOneAndUpdate({name : req.params.name},{
      itemCode    : req.body.itemCode,
      name        : req.body.name,
      description : req.body.description,
      price       : req.body.price,
      stock       : req.body.stock
    }, (err, data) => {
      err ? res.send(err) : res.json(data);
    })
  },

  delete : (req, res) => {
    data.findOneAndRemove({name : req.params.name}, (err, data) => {
      err ? res.send(err) : res.send(data);
    })
  }
}

module.exports = Items
