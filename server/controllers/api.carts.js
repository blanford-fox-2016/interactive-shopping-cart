'use strict'
const Carts = require('../models/Carts')

let allCarts = (req, res, next) => {
  Carts.find({}, (err, all_Carts) => {
    if(err) {
      console.log(err)
      res.send(err)
    }else{
      console.log(`show all Carts`)
      res.json(all_Carts)
    }
  }).sort({_id: -1}) // desc
}

let addCart = (req, res, next) => {
  console.log(req.body.itemList);
  Carts.create({
    memberId          : req.body.memberId,
    total             : req.body.total,
    transaction_date  : req.body.transaction_date,
    itemList          : req.body.itemList
  }, (err, new_Cart) => {
    if(err){
      console.log(err)
      res.send(err)
    }else{
      console.log(`New Cart has been created`);
      res.json(new_Cart)
    }
  })
}

let editCart = (req, res, next) => {
  Carts.update({
    _id : req.params.id
  }, req.body,
  (err, status) => {
    if(err){
      console.log(err)
      res.send(err)
    }else{
      Carts.findById(req.params.id, (err, edited_Cart) => {
        if(err){
          console.log(err)
          res.send(err)
        }else{
          console.log(`${edited_Cart} has been edited`)
          res.json(edited_Cart)
        }
      })
    }
  })
}

let deleteCart = (req, res, next) => {
  Carts.findById(req.params.id,
    (err, delete_Cart) => {
    if(err) {
      console.log(err)
      res.send(err)
    }else{
      delete_Cart.remove((err) => {
        if(err){
          console.log(err)
          res.send(err)
        }else{
          console.log(`${delete_Cart} has been deleted`)
          res.json(delete_Cart)
        }
      })
    }
  })
}

module.exports = {
  allCarts  : allCarts,
  addCart   : addCart,
  editCart  : editCart,
  deleteCart: deleteCart
}
