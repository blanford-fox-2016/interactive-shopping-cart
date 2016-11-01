'use strict'

const data = require('../models/model.carts');


let Carts = {
  create : (req, res) => {
    data.create({
      memberId         : req.body.memberId,
      total            : req.body.total,
      transactionDate  : new Date(),
      itemList         : req.body.itemList
    }, (err,data) => {
        err ? res.send(err) :res.json(data);
    });
  },

  list : (req, res) => {
    data.find({}, (err, data) => {
      err ? res.send(err) : res.json(data);
    })
  },

  find : (req, res) => {
    data.findOne({title : req.params.title}, (err, data) => {
      err ? res.send(err) : res.json(data);
    })
  },

  update : (req, res) => {
    data.findOneAndUpdate({title : req.params.title}, (err, data) => {
      err ? res.send(err) : res.json(data);
    })
  },

  delete : (req, res) => {
    data.findOneAndRemove({title : req.params.title}, (err, data) => {
      err ? res.send(err) : res.send(data);
    })
  }
}

module.exports = Carts
