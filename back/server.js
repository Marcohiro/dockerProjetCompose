  
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const url = 'mongodb://mongo:27017/bdd';

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
  var resultArray = [];
  MongoClient.connect(url, function(err, database){
    if(err) console.error("error", err);
    console.log("connected to get data")
    const db = database.db("mydb");
    const collection = db.collection("mydb");
    collection.find()
    .toArray((err, res) => {
      if(err) console.error("error", err);
      console.log("connected to db");
      res.forEach((value) => {
        console.log(value.id);
        resultArray.push(value.id);
      })
    }) 
  });
  resultArray.forEach(element => {
    console.log(element);
  });
  console.log(resultArray.length);
  res.send(resultArray);
});

app.post('/insert', function(req, res, next){
  MongoClient.connect(url, function(err, database){
    if(err) console.error("error", err);
    console.log("connected");
    const db = database.db("mydb");
    const collection = db.collection("mydb");
    console.log(req.body);
    console.log(req.body.lastName);
    collection.insertOne( { id:req.body.userId, lastName:req.body.lastName, firstName:req.body.firstName}, (err, res) => {
      if(err) console.error("error", err);
      console.log(res);
      console.log("succes");
    })
  });
  res.send("Write API is working");
});

app.get("/", function(req, res, next){
  res.send("API is working");
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});