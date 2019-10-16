//Install express server
const express = require('express');
const path = require('path');
const BodyParser = require("body-parser");
const mongoose = require('mongoose');



const app = express();
 
// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/angularapp'));
 
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.get('/*', function(req,res) {
 
res.sendFile(path.join(__dirname+'/angularapp/index.html'));
});
 
// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 8080);
