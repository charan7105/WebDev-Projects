const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
//Assert always used to do testing, It always validates the info

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  findDocuments(db, function() {
    client.close();
  });
});

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
    collection.insertMany([
      {
        Fname : "Apple",
        score : 8,
        review: "Great fruit"
      }, 
      {
        Fname : "Orange",
        score : 6,
        review: "Kinda Sour"
      },
      {
        Fname : "Banana",
        score : 9,
        review: "Great Stuff!"
      },
    ], function(err, result) {
      assert.equal(err, null);
      //Validate That there are no errors while we are inserting our documents
      assert.equal(3, result.insertedCount);
      assert.equal(3, Object.keys(result.insertedIds).length);
      //This is Ensuring us that we have 3 resuts that are inserted three documents into our collection 
      console.log("Inserted 3 documents into the collection");
      //if it happens then cosole log it
      callback(result);
    });
  };

  
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruits);
      callback(fruits);
    });
  }
