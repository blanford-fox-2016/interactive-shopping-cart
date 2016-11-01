db.carts.insert({
    memberId: '01',
    total: 10000,
    transactionDate: new Date(),
    itemList: [
        {
            itemCode: "1",
            qty: 10,
            price: 1000000
        },
        {
            itemCode: "2",
            qty: 20,
            price: 2000000
        }
    ]
    })
