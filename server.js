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
//var router = express.Router();


var uri = 'mongodb://microk12admin:microk12pass@ds034348.mongolab.com:34348/microk12db'

//mongoose.connect('mongodb://microk12admin:microk12pass@ds034348.mongolab.com:34348/microk12db');

// var Data = mongoose.model('records_levi',{
//   text: String
// });
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
        // assert.equal(err, null);
        // assert.equal(2, docs.length);
        // console.log("Found the following records");
        // console.dir(docs);
        // callback(docs);
        //console.log(docs);
        //res.render('dashboard', {docs:docs});
        res.json(docs);
      });
    }
    findDocuments(db, function() {
      console.log(docs);
      //res.json(docs);
    });

  });
});

// app.get('/api/records', function(req, res){
//   console.log("hello world!!");

//   Data.find(function(err, records){
//     if(err){
//       console.log(err);
//       res.send(err);
//     }
//     res.json(records);
//   });

// });

app.get('*', function(req, res){
    res.sendfile('./public/index.html');
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port 3030');





// router.get('/#/dashboard/', function(req, res){
//   console.log("hello");
//   var response = res;


//   mongo.connect(uri, function(err, db){
//     if(err){
//       return console.log(err);
//     }

//     var findDocuments = function(db, callback) {
//       // Get the documents collection
//       var collection = db.collection('records_levi');
//       // Find some documents
//       collection.find({}).toArray(function(err, docs) {
//         // assert.equal(err, null);
//         // assert.equal(2, docs.length);
//         // console.log("Found the following records");
//         // console.dir(docs);
//         // callback(docs);
//         console.log(docs);
//         //res.render('dashboard', {docs:docs});
//       });
//     }
//     findDocuments(db, function() {
//       console.log(docs);
//       response.sendfile('./public/index.html');

//     });

//   });


// });
