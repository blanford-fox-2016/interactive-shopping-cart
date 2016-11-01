# NodeJS Shopping Cart by tamatamvan
A simple REST API shopping cart app  with using **Node.JS 6, Express, MongoDB, mongoose, dan JQuery**


## Technology
Here are some technologies that used and required to run this program. Make sure you've installed all of them on your machine.
* [Node.JS 6](https://nodejs.org/)
* [Express (NodeJS Framework)](http://expressjs.com/)
* [MongoDB](https://www.mongodb.com)
* [Mongoose](http://mongoosejs.com/)
* [JQuery](jquery.com/)

## Files and directory structure

If you need to edit the routes you can access  `routes/api.js` file, and if you need to edit the logic and data operations you can access `controller` directory.
```
.
── README.md
```


## package.json file and dependencies list

```
{
  "name": "interactive-shopping-cart",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "cors": "^2.8.1",
    "debug": "~2.2.0",
    "express": "~4.13.4",
    "jade": "~1.11.0",
    "live-server": "^1.1.0",
    "mongodb": "^2.2.11",
    "mongoose": "^4.6.5",
    "morgan": "~1.7.0",
    "serve-favicon": "~2.3.0"
  }
}
```

## Running shopping-cart on your machine
Here are some steps you've to follow for running this shopping-cart apps on your machine :
* `cd your_program_directory`
* `npm install` (Install all dependencies of this program)
* `cd server` (Enter the server directory)
* `npm start` (Run the node.js server on port 3000)
* `cd client` (Enter the client directory)
* `live-server` (Run the client server basically on port 8080)

## API References

List off all routes :

|  Route | HTTP | Description |
|--------|------|-------------|
|http://localhost:3000/api/customer | GET | Get all customers list|
|http://localhost:3000/api/customer/:id | GET | Get spesific customer data by id|
|http://localhost:3000/api/customer/add | POST | Create new customer data|
|http://localhost:3000/api/customer/:id/edit | PUT | Edit spesific customer data by id|
|http://localhost:3000/api/customer/:id/destroy | DELETE | DELETE spesific customer data by id|
|http://localhost:3000/api/item | GET | Get all items list|
|http://localhost:3000/api/item/:id | GET | Get spesific item data by id|
|http://localhost:3000/api/item/add | POST | Create new item data|
|http://localhost:3000/api/item/:id/edit | PUT | Edit spesific item data by id|
|http://localhost:3000/api/item/:id/destroy | DELETE | DELETE spesific item data by id|

<!-- List of link :

You can access the data via web Interface by opening these link bellow to your web browser.

|  Route | Description |
|--------|-------------|
| http://localhost:3000/ | Display the search form |
| http://localhost:3000/search?q=your_keyword | Display search results with spesific keyword | -->



## Contact
#### Developer/Projects
* Homepage: [TamaTamvan's Note](https://tamatamvan.web.id)
* e-mail: tama@tamatamvan.web.id
* Twitter: [@tamaadhi1](https://twitter.com/tamaadhi1 "tamaadhi1 on twitter")
* Facebook: [Septian Adhi Tama](https://facebook.com/light.akira21 "Septian Adhi Tama on Facebook")

## Contributor

[![TamaTamvan](https://tamatamvan.web.id/wp-content/uploads/2016/04/bner-e1463908127607.png)](https://tamatamvan.web.id)

Septian Adhi Tama &copy; 2016
