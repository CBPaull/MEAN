
function person(name){
	this.name = name;
	this.distance_travelled = 0;
	this.say_name = function() {
		console.log(this.name);
	}
	this.walk = function() {
		console.log(this.name + " is walking");
		this.distance_travelled+=3;
	}
	this.run = function() {
		console.log(this.name + " is running");
		this.distance_travelled+=10;
	}
	this.crawl = function() {
		console.log(this.name + " is crawling");
		this.distance_travelled+=1;
	}
	this.say_something = function(string) {
		console.log(this.name +" says "+ string);
	}
}
var Connor = new person('Connor');
Connor.say_name();
Connor.walk();
Connor.run();
Connor.crawl();
Connor.say_something("this is actually working")
function ninjaconstructor(name, cohort){
	var ninja = {
		name:name,
		cohort:cohort,
		belt:"Yellow"
	}
	ninja.levelup = function() {
		if (ninja.belt === "Yellow"){
			ninja.belt = "Green";
		}
		else if (ninja.belt === "Green"){
			ninja.belt = "Blue";
		}
		else if (ninja.belt === "Blue"){
			ninja.belt = "Red";
		}
		else if (ninja.belt === "Red"){
			ninja.belt = "Black";
		}
	}
	return ninja;
}
var Paull = ninjaconstructor("Paull", "MEAN");
Paull.levelup();
console.log(Paull.belt);
Paull.levelup();
console.log(Paull.belt);
Paull.levelup();
console.log(Paull.belt);
Paull.levelup();
console.log(Paull.belt);