//Install express server
const express = require('express');
const path = require('path');
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://admin:admin@rlcluster-bnavh.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "newdb";
const app = express();
const app1 = express();
 
// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/angularapp'));
 
app1.use(BodyParser.json());
app1.use(BodyParser.urlencoded({ extended: true }));

app.get('/*', function(req,res) {
 
res.sendFile(path.join(__dirname+'/angularapp/index.html'));
});
 
// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 8080);

app1.listen(3000, () => {
	MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("myCollection");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});