'use strict'

const data = require('../models/model.items');

let Customer = {
  create : (req, res) => {
    data.create({
      itemCode    : req.body.itemCode,
      title       : req.body.title,
      description : req.body.description,
      price       : req.body.price,
      stock       : req.body.stock
    }
  },

  list : (req, res) => {
    data.find({}, (data) => {
      res.json(data);
    })
    //res.send(data.map(book => book.title))
  },

  one : (req, res) => {
    console.log('done');
  },

  get : (req, res) => {
    res.send(data.filter(x => x.id == req.params.id))
  },

  delete : (req, res) => {
    res.send('delete boo')
  },

  find : (req, res) => {
    res.send()
  }
}

module.exports = Book
