'use strict'
const Items = require('../models/Items')

let allItems = (req, res, next) => {
  Items.find({}, (err, all_items) => {
    if(err) {
      console.log(err)
      res.send(err)
    }else{
      console.log(`show all items`)
      res.json(all_items)
    }
  }).sort({_id: -1}) // desc
}

let addItem = (req, res, next) => {
  console.log(req.body);
  Items.create({
    itemCode    : req.body.itemCode,
    name        : req.body.name,
    description : req.body.description,
    price       : req.body.price,
    stock       : req.body.stock
  }, (err, new_item) => {
    if(err){
      console.log(err)

      res.send(err)
    }else{
      console.log(`New Item has been created`);
      res.json(new_item)
    }

  })
}

let editItem = (req, res, next) => {
  Items.update({
    _id : req.params.id
  }, req.body,
  (err, status) => {
    if(err){
      console.log(err)
      res.send(err)
    }else{
      Items.findById(req.params.id, (err, edited_item) => {
        if(err){
          console.log(err)
          res.send(err)
        }else{
          console.log(`${edited_item} has been edited`)
          res.json(edited_item)
        }
      })
    }
  })
}

let deleteItem = (req, res, next) => {
  Items.findById(req.params.id, (err, delete_item) => {
    if(err) {
      console.log(err)
      res.send(err)
    }else{
      delete_item.remove((err) => {
        if(err){
          console.log(err)
          res.send(err)
        }else{
          console.log(`${delete_item} has been deleted`)
          res.json(delete_item)
        }
      })
    }
  })
}

module.exports = {
  allItems  : allItems,
  addItem   : addItem,
  editItem  : editItem,
  deleteItem: deleteItem
}
