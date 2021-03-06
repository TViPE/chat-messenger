
//Client Side
var socket = io.connect('http://localhost:4000');

var message = $('#chat-message');
var handle = $('#chat-handle');
var btn = $('#chat-button');
var output = $('#chat-output');
var feedback = $('#chat-feedback');
var outputVal = "";

// emit event
btn.on('click', function(){
	console.log('button clicked');
	// socket emit new event and send the data to server (2nd parameter)
	var messageVal = message.val();
	var handleVal = handle.val();
	var chatObj = {
		message: messageVal,
		handle: handleVal
	}
	socket.emit('chat', chatObj);
	message.val("");
});


//socket handle chat event with received data sent from server
socket.on('chat', function (data){
	feedback.html("");
	outputVal += '<p><strong>' + data.handle + ':</strong> ' + data.message + '</p>';
	output.html(outputVal);
});

message.keypress(function(){
	socket.emit('typing', handle.val());
});

socket.on('typing', function (data){
	feedback.html('<p>' + data + ' is typing</p>');
});