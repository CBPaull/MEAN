// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemon');
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var Pokeschema = new mongoose.Schema({
	name: String,
	species: String
})
mongoose.model('Pokemon', Pokeschema); // We are setting this Schema in our Models as 'Pokemon'
var Pokemon = mongoose.model('Pokemon') // We are retrieving this Schema from our Models, named 'Pokemon'
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
	Pokemon.find({}, function(err, pokemon) {
		if(err) {
			console.log('something went wrong');
    	} else { // else console.log that we did well and then redirect to the root route
    		console.log('successfully found all pokemon!');
    		res.render('index', {Pokemon: pokemon});
    	}
    	
    });
});
app.get('/pokemon/new', function(req, res) {
	console.log("I'm in pokemon new");
	res.render("new");
});

app.get('/pokemon/show/:id', function(req, res) {
	console.log("I'm in Pokemon show");
	console.log(req.params.id)
	Pokemon.findOne({_id: req.params.id}, function(err, pokemon){
		if(err) {
			console.log('something went wrong');
    	} else { // else console.log that we did well and then redirect to the root route
    		console.log('successfully found a pokemon!');
    		res.render('show', {Pokemon: pokemon});

    	}
    });
});

app.get('/pokemon/edit/:id', function(req, res) {
	Pokemon.findOne({_id: req.params.id}, function(err, pokemon){
		console.log()
		if(err) {
			console.log('something went wrong');
    	} else { // else console.log that we did well and then redirect to the root route
    		console.log('successfully found a pokemon!');
    		res.render("edit", {Pokemon: pokemon});
    	}
    });
});

app.post('/pokemon', function(req, res) {
	console.log("POST DATA", req.body);
	var pokemon = new Pokemon({name: req.body.name, species: req.body.species});
	pokemon.save(function(err) {
		if(err) {
			console.log('something went wrong');
    	} else { // else console.log that we did well and then redirect to the root route
    		console.log('successfully added a pokemon!');
    		res.redirect('/');
    	}
    });
});

app.post('/pokemon/:id', function(req, res) {
	console.log("POST DATA", req.body);
	Pokemon.update({_id: req.params.id}, {$set:{name: req.body.name, species: req.body.species}}, function(err,pokemon){
		if(err) {
			console.log('something went wrong');
    	} else { // else console.log that we did well and then redirect to the root route
    		console.log('successfully edited a pokemon!');
    		res.redirect('/pokemon/show/'+req.params.id);
    	}
    });
});

app.post('/pokemon/destroy/:id', function(req, res) {
	console.log("POST DATA", req.body);
	Pokemon.remove({_id:req.params.id}, function(err){
		if(err) {
			console.log('something went wrong');
    	} else { // else console.log that we did well and then redirect to the root route
    		console.log('successfully released a pokemon!');
    		res.redirect('/');
    	}
    });    
});

app.listen(8000, function() {
	console.log("listening on port 8000");
})