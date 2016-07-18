// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/messages');
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var Schema = mongoose.Schema;





var commentschema = new mongoose.Schema({
	name: { type: String, required: [true, 'must have name'], minlength: [4, 'name must be 4 or more characters']},
	comment: { type: String, required: [true, 'must have comment']},
	_message: {type: Schema.Types.ObjectId, ref:'Message'}
}, 
{
	timestamps:true
});

mongoose.model('Comment', commentschema);
var Comment = mongoose.model('Comment');







var messageschema = new mongoose.Schema({
	name: { type: String, required: [true, 'must have name'], minlength: [4, 'name must be 4 or more characters']},
	message: { type: String, required: [true, 'must have message']},
	comments: [{type: Schema.Types.ObjectId, ref:'Comment'}]
},
{
	timestamps:true
});

mongoose.model('Message', messageschema); // We are setting this Schema in our Models as 'Message'
var Message = mongoose.model('Message'); // We are retrieving this Schema from our Models, named 'Message'






var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {	
	Message.find({})
	// , null, {sort: '-createdAt'})
	.populate({path:'comments', sort: '-createdAt'})
	.exec(function(err, message) {
		if(err) {
			console.log('something went wrong');
    	} else { // else console.log that we did well and then redirect to the root route
    		console.log('successfully found all messages!');
    		res.render('index', {messages: message});
    	}
    	
    });
})
app.post('/newmessage', function(req, res) {
	console.log("POST DATA", req.body);
	var message = new Message({name: req.body.name, message: req.body.message});
	message.save(function(err) {
		if(err) {
			res.render('errors', {title: 'you have errors!', errors: message.errors});
    	} else { // else console.log that we did well and then redirect to the root route
    		console.log('successfully added a message!');
    		res.redirect('/');
    	}
    });
});

app.post('/messages/comment/:id', function(req, res) {
	console.log("POST DATA");
	Message.findOne({_id:req.params.id}, function(err, message) {
		if(err){
			console.log('this is the error from finding message');
		} else {
			console.log(message);
			var comment = new Comment({name: req.body.name, comment: req.body.comment, _message: req.params.id});
			comment.save(function(err, comment){
				if(err){
					res.render('errors', {title: 'you have errors!', errors: comment.errors});
				} else {
					message.comments.push(comment);
					message.save(function(err, result){
						if(err){
							res.render('errors', {title: 'you have errors!', errors: message.errors});
						} else {
							res.redirect('/');

						}
					})
				}
			})		
		}
	})
});



app.listen(8000, function() {
	console.log("listening on port 8000");
})