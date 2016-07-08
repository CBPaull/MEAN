var Lib = {
   map: function(list, iteratee) {   
    var output = [];
    for (i=0; i<list.length; i++) {
    	output.push(iteratee(list[i]));
    }
    return output;
   },
   reduce: function(list, iteratee, memo) {
   	var output = memo;
    for (i=0; i<list.length; i++) {
    	output = iteratee(output, list[i]);
   	}
   	return output;
   },
   find: function(list, predicate) {
  	for (i=0; i<list.length; i++) {
  		if (predicate(list[i])){
  			return list[i];
  		}
   	}
   },
   filter: function(list, predicate) {
   	var output = [];
   	for (i=0; i<list.length; i++) {
  		if (predicate(list[i])){
  			output.push(list[i])
  		}
   	}
   	return output;
   },
   reject: function(list, predicate) {
   	var output = [];
   	for (i=0; i<list.length; i++) {
  		if (predicate(list[i])){}
  		else{
  			output.push(list[i])
  		}
   	}
   	return output;
   }
 }

 console.log(Lib.map([1, 2, 3], function(num){ return num * 3; }));
 console.log(Lib.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0));
 console.log(Lib.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
 console.log(Lib.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
 console.log(Lib.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
