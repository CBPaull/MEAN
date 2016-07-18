var mongoose = require('mongoose');
var Pokemon = mongoose.model('Pokemon');
module.exports = {
	show: function(req, res) {
		Pokemon.find({}, function(err, pokemon) {
			if(err) {
				console.log('something went wrong');
    		} else { 
    			console.log('successfully found all pokemon!');
    			res.render('index', {Pokemon: pokemon});
    		}
    	});
	},
	showid: function(req, res) {
		Pokemon.findOne({_id: req.params.id}, function(err, pokemon){
			if(err) {
				console.log('something went wrong');
    		} else { 
    			console.log('successfully found a pokemon!');
    			res.render('show', {Pokemon: pokemon});

    		}
    	});
	},
	showedit: function(req, res) {
		Pokemon.findOne({_id: req.params.id}, function(err, pokemon){
			console.log()
			if(err) {
				console.log('something went wrong');
    		} else { 
    			console.log('successfully found a pokemon!');
    			res.render("edit", {Pokemon: pokemon});
    		}
    	});
	},
	create: function(req, res) {
		var pokemon = new Pokemon({name: req.body.name, species: req.body.species});
		pokemon.save(function(err) {
			if(err) {
				console.log('something went wrong');
    		} else { 
    			console.log('successfully added a pokemon!');
    			res.redirect('/');
    		}
    	});
	},
	edit: function(req, res) {
		Pokemon.update({_id: req.params.id}, {$set:{name: req.body.name, species: req.body.species}}, function(err,pokemon){
			if(err) {
				console.log('something went wrong');
    		} else { 
    		console.log('successfully edited a pokemon!');
    		res.redirect('/pokemon/show/'+req.params.id);
    		}
    	});
	},
	destroy: function(req, res) {
		Pokemon.remove({_id:req.params.id}, function(err){
			if(err) {
				console.log('something went wrong');
    		} else { 
    		console.log('successfully released a pokemon!');
    		res.redirect('/');
    		}
    	});
	} 
}