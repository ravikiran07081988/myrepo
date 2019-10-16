//Install express server
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

console.log('connect');
mongoose.connect('mongodb+srv://admin:admin@rlcluster-bnavh.mongodb.net/test?retryWrites=true&w=majority', { useMongoClient: true});
console.log('connect on');
mongoose.connection.on('connected', () => {
  console.log('Connected to Database ');
});
console.log('connect on 1');
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});
console.log('connect on 2');
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
