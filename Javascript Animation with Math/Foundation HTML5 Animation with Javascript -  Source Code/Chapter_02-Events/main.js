window.onload = function () {
	var canvas = document.getElementById('canvas'),
		mouse = utils.captureMouse(canvas);

	canvas.addEventListener('mousedown', function () {
		console.log("x: " + mouse.x + ", y: " + mouse.y);
	}, false);
};

// window.onload = function () {
// 	var canvas = document.getElementById('canvas'),
// 		touch = utils.carptureTouch(canvas);

// 	if (touch.isPressed) {
// 		console.log("x: " + touch.x + ", y: " + touch.y);
// 	} else {
// 		console.log(touch);
// 	}
// }