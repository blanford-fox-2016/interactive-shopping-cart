'use strict'

const data = require('../models/model.customers');


let Customers = {
  create : (req, res) => {
    data.create({
      name             : req.body.name,
      memberId         : req.body.memberId,
      address          : req.body.address,
      zip              : req.body.zip,
      phone            : req.body.phone
    }, (err, data) => {
      err? res.send(err) : res.json(data);
    })
  },

  list : (req, res) => {
    data.find({}, (err, data) => {
      err? res.send(err) : res.json(data);
    })
  },

  find : (req, res) => {
    data.findOne({name : req.params.name}, (err, data) => {
      err ? res.send(err) : res.json(data);
    })
  },

  update : (req, res) => {
    data.findOneAndUpdate({name : req.params.name}, {
      name             : req.body.name,
      memberId         : req.body.memberId,
      address          : req.body.address,
      zip              : req.body.zip,
      phone            : req.body.phone
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

module.exports = Customers
