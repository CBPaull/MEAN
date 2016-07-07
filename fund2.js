
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
function numbers(){
	this.sumto = function(number){
		var sum = 0;
		for( i=0; i<= number; i++){
			sum+=i;
		}
		console.log(sum);
	}
	this.findmin = function(arr){
		var min = arr[0]
		for (i=1; i<arr.length;i++){
			if (arr[i]<min){
				min = arr[i];
			}
		}
		console.log(min);
	}
	this.findavg = function(arr){
		var sum = arr[0]
		for (i=1; i<arr.length; i++){
			sum+= arr[i];
		}
		avg = sum/arr.length;
		console.log(avg);
	}
}
