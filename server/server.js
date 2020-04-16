const express = require('express')
const app = express()
const port = 5000

var cors = require('cors')

const posts = [
    {
        author: 'Friss Jenő',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        title: 'Ez itt egy cím',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices condimentum egestas. Aenean venenatis posuere malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices condimentum egestas. Aenean venenatis posuere malesuada',
        date : '2020. 02. 03.'
    },
    {
        author: 'Horváth Béla',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        title: 'Meg valami',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices condimentum egestas. Aenean venenatis posuere malesuada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices condimentum egestas. Aenean venenatis posuere malesuada',
        date : '2019. 05.23.'
    },
    {
        author: 'Lente Jucus',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        title: 'További írások',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices condimentum egestas. Aenean venenatis posuere malesuada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices condimentum egestas. Aenean venenatis posuere malesuada',
        date : '2019. 01. 13.'
    }
]



var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

app.use(cors())

db.serialize(function () {
    db.run("CREATE TABLE posts('author' TEXT, 'desc' TEXT, 'title' TEXT, 'content' TEXT, publish_date TEXT);");
})

db.serialize(function () {
    posts.forEach(post => {
        db.prepare(`INSERT INTO posts VALUES (?,?,?,?,?)`)
            .run(post.author, post.description, post.title, post.content, post.date)
    })
})

/*  CSAK TESZTELÉSRE
app.get('/', (req, res) => {
    res.sendFile('/home/krisztiandev/Braining hub/react-blog_NyK-KJ/teszt.html')
})*/

app.get('/products', (req, res) => {

    setTimeout(() => {
        db.serialize(function () {
            db.all('SELECT rowid as id, author, content, title, publish_date, desc FROM posts', function (err, result) {
                if (err != null) {
                    // hibakezelés
                }
                console.log(result)
                res.json({ posts: result })
            })
        })

    }, 5000);

})

app.get('/blog/:id', (req, res) => {

    setTimeout(() => {
        db.serialize(function () {
            db.all(`SELECT rowid as id, author, title, content, publish_date FROM posts WHERE id = ${req.params.id}`, function (err, result) {
                if (err != null) {
                    // hibakezelés
                }
                console.log(result)
                let [post] = result
                res.json({ post: post })
            })
        })

    }, 5000);

})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))