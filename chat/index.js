var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var messagelist = [];

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
	if (messagelist != []) {
		socket.emit('history', messagelist);
	}
	socket.on('chat message', function(msg, user){
		messagelist.push({'user': user, 'msg': msg});
		console.log(user, msg);
		io.emit('chat message', user, msg);
	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});
