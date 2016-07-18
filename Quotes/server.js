// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes');
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var quoteschema = new mongoose.Schema({
	name: String,
	quote: String,
	likes: {type: Number, default: 0}
},
{
	timestamps:true
});

mongoose.model('Quotes', quoteschema); // We are setting this Schema in our Models as 'quote'
var Quote = mongoose.model('Quotes') // We are retrieving this Schema from our Models, named 'quote'
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
	console.log("I'm in new quote");
	res.render("index");
});
app.get('/quotes', function(req, res) {
	
	Quote.find({}, null, {sort: '-createdAt'}, function(err, quote) {
		if(err) {
			console.log('something went wrong');
    	} else { // else console.log that we did well and then redirect to the root route
    		console.log('successfully found all quotes!');
    		res.render('quotes', {quotes: quote});
    	}
    	
    });
})
app.post('/newquote', function(req, res) {
	console.log("POST DATA", req.body);
	var quote = new Quote({name: req.body.name, quote: req.body.quote});
	quote.save(function(err) {
		if(err) {
			console.log('something went wrong');
    	} else { // else console.log that we did well and then redirect to the root route
    		console.log('successfully added a quote!');
    		res.redirect('/quotes');
    	}
    });
});

app.post('/quotes/like/:id', function(req, res) {
	console.log("POST DATA");
	var value = parseInt(req.body.likes, 10) + 1;
	Quote.update({_id: req.params.id}, {$set:{likes: value}}, function(err){
		if(err) {
			console.log('something went wrong');
    	} else { // else console.log that we did well and then redirect to the root route
    		console.log('successfully liked a quote!');
    		res.redirect('/quotes');
    	}
    });
});

app.post('/quotes/destroy/:id', function(req, res) {
	console.log("POST DATA", req.body);
	Quote.remove({_id:req.params.id}, function(err){
		if(err) {
			console.log('something went wrong');
    	} else { // else console.log that we did well and then redirect to the root route
    		console.log('successfully removed a quote!');
    		res.redirect('/quotes');
    	}
    });    
});

app.listen(8000, function() {
	console.log("listening on port 8000");
})