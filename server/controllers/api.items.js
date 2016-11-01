'use strict'
const Items = require('../models/Items')

let allItems = (req, res, next) => {
  Items.find({}, (err, all_items) => {
    if(err) {
      console.log(err)
      res.send(err)
    }else{
      console.log(`show all items`)
      res.json(JSON.parse(all_items))
    }
  }).sort({_id: -1}) // desc
}

let addItem = (req, res, next) => {
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
      console.log(`${new_item} has been created`);
      res.json(JSON.parse(new_item))
    }

  })
}

let editItem = (req, res, next) => {
  Items.update({
    _id : req.params.id
  }, req.body,
  (err, edited_item) => {
    if(err){
      console.log(err)
      res.send(err)
    }else{
      console.log(`${edited_item} has been edited`)
      res.json(JSON.parse(edited_item))
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
          res.json(JSON.parse(delete_item))
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
