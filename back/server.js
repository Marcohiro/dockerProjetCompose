  
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const url = 'mongodb://mongo:27017';

app.use(express.urlencoded());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/get-data', function(req, res, next){
  MongoClient.connect(url, function(err, database){
    if(err) console.error("error", err);
    const db = database.db("mydb");
    const collection = db.collection("mydb");
    collection.find()
    .toArray((err, items) => {
      if(err) console.error("error", err);
      res.send(items);
    }) 
    database.close();
  });
});

app.post('/insert', function(req, res, next){
  MongoClient.connect(url, function(err, database){
    if(err) console.error("error", err);
    console.log("connected");
    const db = database.db("mydb");
    const collection = db.collection("mydb");
    collection.insertOne( { id:req.body.userId, lastName:req.body.lastName, firstName:req.body.firstName}, (err, res) => {
      if(err) console.error("error", err);
    })
    database.close();
  });
  res.send("Write API is working");
});

app.get("/", function(req, res, next){
  res.send("API is working");
})

app.listen(8085, function () {
  console.log('Example app listening on port 8080!')
});