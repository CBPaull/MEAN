var mongoose = require('mongoose');
var Pokemon = mongoose.model('Pokemon');
var pokemon = require('../controllers/pokemon.js');

module.exports = function(app){
	app.get('/', function(req, res) {
		pokemon.show(req, res);
	});
	app.get('/pokemon/new', function(req, res) {
		console.log("I'm in pokemon new");
		res.render("new");
	});
	app.get('/pokemon/show/:id', function(req, res) {
		console.log("I'm in Pokemon show");
		console.log(req.params.id)
		pokemon.showid(req, res);
	});
	app.get('/pokemon/edit/:id', function(req, res) {
		pokemon.showedit(req, res);
	});
	app.post('/pokemon', function(req, res) {
		console.log("POST DATA", req.body);
		pokemon.create(req, res);
	});
	app.post('/pokemon/:id', function(req, res) {
		console.log("POST DATA", req.body);
		pokemon.edit(req, res);
	});

	app.post('/pokemon/destroy/:id', function(req, res) {
		console.log("POST DATA", req.body);
		pokemon.destroy(req, res);
	});
};