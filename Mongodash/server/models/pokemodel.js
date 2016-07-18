var mongoose = require('mongoose');
var Pokeschema = new mongoose.Schema({
	name: String,
	species: String
});
mongoose.model('Pokemon', Pokeschema);
var Pokemon = mongoose.model('Pokemon'); 