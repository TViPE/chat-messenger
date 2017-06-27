
//Server Side
var express = require('express');
var socket = require('socket.io');

//set up app
var app = express();

//set up server
var server = app.listen(process.env.port || 4000, function(){
	console.log("Listening on port 4000");
});

// set up static public folder
app.use(express.static('public'));

//set up socket for server
var io = socket(server);

io.on('connection', function (socket){
	// Different Client is associated with different socket id
	console.log('Connection made on port 4000 with ID: ' + socket.id);

		// Server Socket receives data sent from client
	socket.on('chat', function (data){
		//Send the received data to other clients
		console.log(data);
		io.sockets.emit('chat', data);
	});
});



