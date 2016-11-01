var item = require('../models/items')

module.exports = {
  itemList: function(req, res, next) {
    item.find(function (err, item) {
      if (err) return console.error(err);
      res.json(item)
    })
  }, // end function user list
  itemCreate: function(req, res, next) {
    console.log("data masuk neh");
    var data = JSON.parse(req.body.data);
    console.log(" ini data item : ", data.itemCode);

    item.create({
      itemCode: data.itemCode,
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock
    }).then(function(data){
      res.json(data)
    })

  } // end of itemCreate
  // itemDelete: function (req, res, next){
  //   res.json("success");
  // },
  // itemUpdate: function (req,res,next){
  //   res.json("success");
  // }

}
