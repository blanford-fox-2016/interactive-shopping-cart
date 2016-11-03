// VIA MONGODB

db.carts.insert({
memberId: 'CL001',
total: 1000,
transaction_date: new Date(),
itemList: [
  {
    itemCode: 'A01',
    qty: 10,
    price: 1000
  },
  {
    itemCode: 'B02',
    qty: 20,
    price: 2000
  }
]
})

// VIA POSTMAN

{
	"memberId": "CL001",
	"total": 1000,
	"transaction_date": "2016-11-01T10:18:37.323Z",
	"itemList": [
	  {
	    "itemCode": "A01",
	    "qty": 10,
	    "price": 1000
	  },
	  {
	    "itemCode": "B02",
	    "qty": 20,
	    "price": 2000
	  }
	]
}
