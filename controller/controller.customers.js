'use strict'

const data = require('../models/model.customers');


let Customers = {
  create : (req, res) => {
    var result = JSON.parse(req.body.data);
    data.create({
      name             : result.name,
      memberId         : result.memberId,
      address          : result.address,
      zip              : result.zip,
      phone            : result.phone
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
    var result = JSON.parse(req.body.data);
    data.findOneAndUpdate({name : result.name}, {
      name             : result.name,
      memberId         : result.memberId,
      address          : result.address,
      zip              : result.zip,
      phone            : result.phone
    }, (err, data) => {
      err ? res.send(err) : res.json(data);
    })
  },

  delete : (req, res) => {
    var result = JSON.parse(req.body.data);
    data.findOneAndRemove({name : req.params.name}, (err, data) => {
      err ? res.send(err) : res.send(data);
    })
  }
}

module.exports = Customers
