( function(global) {
	console.log('going in herer');
	var _dojo = function(id) {
		console.log('being invoked');
		var dojo = {}
		dojo.click = function(parameter) {
			document.getElementById(id).addEventListener("click", parameter);
		}
		dojo.hover = function(onparameter, leaveparameter) {
			console.log('hovering');
			console.log(id);
			document.getElementById(id).addEventListener("mouseover", onparameter);
			document.getElementById(id).addEventListener("mouseout", leaveparameter);
		}
		return dojo;
	}
	global._dojo = _dojo;
	// return _dojo;
}
(window))