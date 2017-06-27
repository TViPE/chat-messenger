
var express = require('express');
var socket = require('socket.io');

//set up app
var app = express();

//set up server
var server = app.listen(4000, function(){
	console.log("Listening on port 4000");
});

// set up static public folder
app.use(express.static('public'));

//set up socket for server
var io = socket(server);
