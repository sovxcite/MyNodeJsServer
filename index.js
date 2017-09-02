var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://10.5.164.40:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});