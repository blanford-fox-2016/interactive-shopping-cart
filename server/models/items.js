var itemSchema = mongoose.Schema({
    "itemCode" : String,
    "name" : String,
    "description" : String,
    "price" : Number,
    "stock" : Number
});

var item = mongoose.model('item', itemSchema);

module.exports = item
