window.onload = function() {

	// Defined function
	function onKeyboardEvent (event) {
		console.log(event);
		switch (event.keyCode) {
			case 38: 
				console.log("up!");
				break;
			case 40: 
				console.log("down!");
				break;
			case 37: 
				console.log("left!");
				break;
			case 39: 
				console.log("right!");
				break;
			default:
				console.log(event.keyCode);
		}
	}

	

	// Added a event listener for the window when typing
	window.addEventListener('keydown', onKeyboardEvent, false);
	window.addEventListener('keyup', onKeyboardEvent, false);
};