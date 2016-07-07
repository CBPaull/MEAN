function runningLogger(){
	console.log("I am Running")
}
function multiplyByTen(number){
	console.log(number*10)
}
stringone = "stringnumberone"
stringtwo = "stringnumbertwo"
function stringReturnOne(){
	return(stringone)
}
function stringReturnTwo(){
	return(stringtwo)
}
function caller(arg1){
	if (typeof arg1 === 'function'){
		arg();
	}
}
function myDoubleConsoleLog(arg1, arg2){
	if (typeof arg1 === 'function' && typeof arg2 === 'function'){
		console.log(arg1());
		console.log(arg2());
	}
}
function caller2(arg1, arg2, arg3){

		console.log('Starting');
	if (typeof arg1 === 'function'){
		setTimeout(function(){ 
			arg1(arg2, arg3)
			console.log('Ending?');}, 2000);	
	}
	return 'interesting';
}
// runningLogger();
// multiplyByTen(20);
// stringReturnOne();
// stringReturnTwo();
// caller(runningLogger());
// myDoubleConsoleLog(stringReturnOne(), stringReturnTwo());
caller2(myDoubleConsoleLog, stringReturnOne, stringReturnTwo);

