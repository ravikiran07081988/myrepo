const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://admin:admin@rlcluster-bnavh.mongodb.net/sampledb?retryWrites=true&w=majority";
//const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err,db) => {
  if (err) throw err;
  console.log("DB connected!");
  var dbo = db.db("sampledb");
  
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
	var myobj = { name: "Company Inc", address: "Highway 37" };
	  dbo.collection("customers").insertOne(myobj, function(err, res) {
		if (err) throw err;
		console.log("1 document inserted");
		db.close();
	  });
  });
  
  
});

const app = express();
app.use(express.static(__dirname + '/angularapp'));
 

app.get('/*', function(req,res) {
 
res.sendFile(path.join(__dirname+'/angularapp/index.html'));
});

const currentPort = process.env.PORT || 8080;
//const currentPort = 3000;
app.listen(currentPort, () => {
	console.log('listening RKN');
});
