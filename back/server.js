
const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

