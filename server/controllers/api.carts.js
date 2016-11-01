'use strict'
const Carts = require('../models/Carts')

let allCarts = (req, res, next) => {
  Carts.find({}, (err, all_Carts) => {
    if(err) {
      console.log(err)
      res.send(err)
    }else{
      console.log(`show all Carts`)
      res.json(JSON.parse(all_Carts))
    }
  }).sort({_id: -1}) // desc
}

let addCart = (req, res, next) => {
  Carts.create({
    memberId          : req.body.memberId,
    total             : req.body.total,
    transaction_date : req.body.transaction_date,
    itemList          : req.body.itemList
  }, (err, new_Cart) => {
    if(err){
      console.log(err)
      res.send(err)
    }else{
      console.log(`${new_Cart} has been created`);
      res.json(JSON.parse(new_Cart))
    }

  })
}

let editCart = (req, res, next) => {
  Carts.update({
    _id : req.params.id
  }, req.body,
  (err, edited_Cart) => {
    if(err){
      console.log(err)
      res.send(err)
    }else{
      console.log(`${edited_Cart} has been edited`)
      res.json(JSON.parse(edited_Cart))
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
          res.json(JSON.parse(delete_Cart))
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
