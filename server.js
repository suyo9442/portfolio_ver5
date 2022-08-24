//////////////// 라이브러리 ////////////////
/* express */
const express = require('express');
const app = express();
/* body-parser */
app.use(express.urlencoded({ extended: true }))
/* ejs */
app.set('view engine', 'ejs');
/* env */
require('dotenv').config()
/* css */
app.use('/public', express.static('public'))
/* MongoDB */
const MongoClient = require('mongodb').MongoClient;
var db;
MongoClient.connect(process.env.DB_URL, { useUnifiedTopology: true }, (err, client) => {
    db = client.db('portfolio');

    app.listen(process.env.PORT, function () {
        console.log('listening on 8080')
    })
})


//////////////// get요청 ////////////////
app.get('/', (req, res) => {
    res.render('loading.ejs')
})
app.get('/main', (req, res) => {
    res.render('index.ejs')
})
// app.post('/nickname', function (req, res) {
//     console.log(req.body);
//     res.redirect('/main');
// })