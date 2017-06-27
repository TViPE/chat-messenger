
//Client Side
var socket = io.connect('http://localhost:4000');

var message = $('#chat-message');
var handle = $('#chat-handle');
var btn = $('#chat-button');
var output = $('#chat-output');
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
	console.log(chatObj)
	// socket.emit('chat', {
	// 	message: message.value,
	// 	name: name.value
	// });

	socket.emit('chat', chatObj);
	message.val("");
});


//socket handle chat event with received data sent from server
socket.on('chat', function(data){
	outputVal += '<p><strong>' + data.handle + ':</strong> ' + data.message + '</p>';
	output.html(outputVal);
});