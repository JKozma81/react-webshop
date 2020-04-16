const express = require('../frontend/node_modules/express')
const app = express()
const port = 5000

const cors = require('../frontend/node_modules/cors')

const posts = [
  {
    'id': 1,
    "name": "Intel i5 3600U",
    "shortSpecs": "i5 3Ghz",
    "image": "/images/product-01/i5.jpg",
    "qty": 4,
    "url": "https://ark.intel.com/content/www/us/en/ark/products/88190/intel-core-i5-6300u-processor-3m-cache-up-to-3-00-ghz.html",
    "price": 74

  },
  {
    'id': 2,
    "name": "Radeon Ryzen 5600",
    "shortSpecs": "Ryzen 5600",
    "image": "/images/product-02/ryzen.jpg",
    "qty": 7,
    "url": "https://www.amd.com/en/ryzen-5",
    "price": 34

  },
  {
    'id': 3,
    "name": "Asus Vivobook x6524",
    "shortSpecs": "Vivobook 12 GB",
    "image": "/images/product-03/asus.jpg",
    "qty": 4,
    "url": "https://www.asus.com/hu/Laptops/VivoBook-Series-Products/",
    "price": 14

  },
  {
    'id': 4,
    "name": "Laptop hűtő",
    "shortSpecs": "Olcsó laptop hűtő",
    "image": "/images/product-04/huto.jpg",
    "qty": 12,
    "url": "https://www.bestmarkt.hu/cooler-master-notepal-l2-17-laptop-hutopad-fekete-p411392",
    "price": 2

  },
  {
    'id': 5,
    "name": "Creative Hangszóró",
    "shortSpecs": "Creative 6534",
    "image": "/images/product-05/creative.jpg",
    "qty": 20,
    "url": "https://us.creative.com/p/speakers/e-mu-xm7-bookshelf-speakers",
    "price": 24

  }

]

const images = [
  {
    "id": 1,
    "url": "/images/product-01/i5.jpg"
  },
  {
    "id": 2,
    "url": "/images/product-02/ryzen.jpg",
  },
  {
    "id": 3,
    "url": "/images/product-03/asus.jpg"
  },
  {
    "id": 4,
    "url": "/images/product-04/huto.jpg"
  },
  {
    "id": 5,
    "url": "/images/product-05/creative.jpg"
  },

]


var sqlite3 = require('../frontend/node_modules/sqlite3').verbose();

var db = new sqlite3.Database(':memory:');

app.use(cors())

db.serialize(function () {
  db.run("CREATE TABLE products('id' TEXT, 'name' TEXT, 'shortSpec' TEXT, 'image' TEXT, 'qty' INT, 'url' TEXT, 'price' INT);");
})

db.serialize(function () {
  posts.forEach(post => {
    let { id, name, shortSpecs, image, qty, url, price } = post
    db.prepare(`INSERT INTO products VALUES (?,?,?,?,?,?,?)`)
      .run(id, name, shortSpecs, image, qty, url, price)
  })
})

db.serialize(function () {
  db.run("CREATE TABLE images('id' TEXT, 'url' TEXT);");
})


db.serialize(function () {
  images.forEach(image => {
    let { id, url } = image
    db.prepare(`INSERT INTO images VALUES (?,?)`)
      .run(id, url)
  })
})


app.get('/products', (req, res) => {


  db.serialize(function () {
    db.all('SELECT * FROM products WHERE', function (err, result) {
      if (err != null) {
        // hibakezelés
      }
      console.log(result)
      res.json({ products: result })
    })
  })


})


app.get('/products/:id', (req, res) => {


  db.serialize(function () {
   let {id} = req.params
    db.all(`SELECT * FROM images WHERE id='${id}'`, function (err, result) {
      if (err != null) {
        // hibakezelés
      }
      console.log(result)
      res.json({ images: result })
    })
  })


})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))