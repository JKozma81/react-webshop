const express = require('../frontend/node_modules/express')
const app = express()
const port = 5000

let cors = require('../frontend/node_modules/cors')

const posts = [
    {
        "name": "Intel i5 3600U",
        "shortSpecs": "i5 3Ghz",
        "image": "https://p1.akcdn.net/full/566327412.intel-core-i5-9600kf-hexa-core-3-70ghz-lga1151.jpg",
        "qty": 4,
        "url": "https://ark.intel.com/content/www/us/en/ark/products/88190/intel-core-i5-6300u-processor-3m-cache-up-to-3-00-ghz.html",
        "price": 74
      
      },
      {
        "name": "Radeon Ryzen 5600",
        "shortSpecs": "Ryzen 5600",
        "image": "https://s12emagst.akamaized.net/products/5414/5413419/images/res_e058e84cc16e0c0bc182d264a7b475f3_450x450_bdvg.jpg",
        "qty": 7,
        "url": "https://www.amd.com/en/ryzen-5",
        "price": 34
      
      },
      {
        "name": "Asus Vivobook x6524",
        "shortSpecs": "Vivobook 12 GB",
        "image": "https://s12emagst.akamaized.net/products/21645/21644225/images/res_ae52dabb75678ef268faf3aa7ea4ce10_450x450_ogg8.jpg",
        "qty": 4,
        "url": "https://www.asus.com/hu/Laptops/VivoBook-Series-Products/",
        "price": 14
      
      },
      {
        "name": "Laptop hűtő",
        "shortSpecs": "Olcsó laptop hűtő",
        "image": "https://www.bestmarkt.hu/img/o/411392-2bk9b.jpg",
        "qty": 12,
        "url": "https://www.bestmarkt.hu/cooler-master-notepal-l2-17-laptop-hutopad-fekete-p411392",
        "price": 2
      
      },
      {
        "name": "Creative Hangszóró",
        "shortSpecs": "Creative 6534",
        "image": "https://p1.akcdn.net/full/329993267.creative-e-mu-xm7-2-0.jpg",
        "qty": 20,
        "url": "https://us.creative.com/p/speakers/e-mu-xm7-bookshelf-speakers",
        "price": 24
      
      }

]


var sqlite3 = require('../frontend/node_modules/sqlite3').verbose();

var db = new sqlite3.Database(':memory:');

app.use(cors())

db.serialize(function () {
    db.run("CREATE TABLE products('name' TEXT, 'shortSpec' TEXT, 'image' TEXT, 'qty' INT, 'url' TEXT, 'price' INT);");
})

db.serialize(function () {
    posts.forEach(post => {
       let  {name, shortSpecs, image, qty, url, price} = post
        db.prepare(`INSERT INTO products VALUES (?,?,?,?,?,?)`)
            .run(name, shortSpecs, image, qty, url, price)
    })
})


app.get('/products', (req, res) => {

 
        db.serialize(function () {
            db.all('SELECT rowid as id, name, shortSpec, image, qty, url FROM products', function (err, result) {
                if (err != null) {
                    // hibakezelés
                }
                console.log(result)
                res.json({ products: result })
            })
        })


})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))