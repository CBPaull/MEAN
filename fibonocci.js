function fib() {
	var twoback = 0;
	var oneback = 1;
	var count = 1;
	function nacci() {
		console.log(count);
		count = twoback+oneback;
		twoback = oneback;
		oneback = count;
}
return nacci;
}
var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();