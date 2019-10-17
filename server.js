//Install express server
const express = require('express');
const path = require('path');


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@rlcluster-bnavh.mongodb.net/newdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
	console.log('listening DB');
  const collection = client.db("newdb").collection("myCollection");
	console.log(collection);
  client.close();
});


const app = express();
 
// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/angularapp'));
 

app.get('/*', function(req,res) {
 
res.sendFile(path.join(__dirname+'/angularapp/index.html'));
});
 
// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 8080, () => {
	console.log('listening RKN');
});
