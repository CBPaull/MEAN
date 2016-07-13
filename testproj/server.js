// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
	res.render("index");
})
app.get('/button', function(req, res) {
	res.render("button");
})
app.get('/result', function(req, res) {
	res.render("result")
})
// post route for adding a user
app.post('/user', function(req, res) {
	console.log("POST DATA", req.body);
	var user = req.body;
	console.log(user);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.render('result', {user: user});
})
// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
	console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
	console.log("WE ARE USING SOCKETS!");
	console.log(socket.id)
	var count = 0

	socket.on("submitted", function (data){
		console.log('Someone clicked a button!  Reason: ' + data.name + data.location + data.language + data.comment);
		number = Math.floor(Math.random()*1000);
		console.log (number);
		socket.emit('server_response', {name: data.name, location: data.location, language: data.language, comment: data.comment, number: number});
	});

	socket.on("clicked", function(){
		count += 1;
		io.emit('server_response', {count: count});
	});
	socket.on("reset", function(){
		count = 0
		io.emit('server_response', {count: count});
	});
});