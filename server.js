var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var assert = require('assert');
var mongo = require('mongodb').MongoClient;

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
//router was causing me issues for some unknown reason...
//var router = express.Router();

var uri = 'mongodb://microk12admin:microk12pass@ds034348.mongolab.com:34348/microk12db'

app.get('/api/records', function(req, res){
  mongo.connect(uri, function(err, db){
    if(err){
      return console.log(err);
    }

    var findDocuments = function(db, callback) {
      // Get the documents collection
      var collection = db.collection('records_levi');
      // Find some documents
      collection.find({}).toArray(function(err, docs) {
        res.json(docs);
      });
    }
    findDocuments(db, function() {
      console.log(docs);
    });

  });
});

app.put('/api/records/:record_id', function(req, res){
  var id = req.params.record_id;
  console.log("THIS IS REQ.BODY", req.body);
  mongo.connect(uri, function(err, db){
    if(err){
      return console.log(err);
    }

    var updateDocument = function(db, callback) {
      // Get the documents collection
      var collection = db.collection('records_levi');
      // I like the official DB querying methods! Its nasty to some people, but I dig it.
      collection.findAndModify({ _id: id }, [],
      {$set: {
        "CompleteInfo.ActionNotes": req.body.name,
        "CompleteInfo.Date": req.body.date
      }}, {new: true},  function(err, data){
        if(err){
          return console.log(500, err);
        }
        if(!data){
          return console.log(404);
        }
        console.log(data);
      });
    }
    updateDocument(db, function() {
      //console.log(docs);
      res.json(docs);
    });

  });
});


app.get('*', function(req, res){
    res.sendfile('./public/index.html');
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port 3030');





