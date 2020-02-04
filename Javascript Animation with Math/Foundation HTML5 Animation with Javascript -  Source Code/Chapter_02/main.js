window.onload = function() {
	// console.log(123)
}



// //  The function window.requestAnimationFrame accepts a callback function as an
// // argument and executes it prior to redrawing the screen
// (function drawFrame () {
// 	window.requestAnimationFrame(drawFrame, canvas);

// 	// animation code...
	
// }());



// // code snippet that you can use to normalize the function across multiple browsers:
// if (!window.requestAnimationFrame) {
// 	window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
// 		window.mozRequestAnimationFrame ||
// 		window.oRequestAnimationFrame ||
// 		window.msRequestAnimationFrame ||
// 		function (callback) {
// 			return window.setTimeout(callback, 1000/60);
// 		});
// } 


// // defined object and will modify later
// var objA = {}; 
	
// objA.name = "My Object A";

// var objB = {
// 	name: "My Object B",
// 	hello: function (person) {
// 		console.log("Hello " + person);
// 	}
// }

// objB.hello('Gentle Reader');

// // p21 - chapter 2
// // Creating new kinds of objects
// //  - a constructor function is a special kind of function that creates a new object based on the properties assigned to that constructor
// //  - a constructor function from a regular function, use the convertion of starting the name with a "capital letter"
// function MyObject (person) {
// 	this.name = person;
// 	this.say = function() {
// 		console.log("It's " + this.name);
// 	}
// }

// var objA = new MyObject("Gentle Reader");

// objA.say();


// // p22 - Functional Style
// // JavaScript language is that functions are first-class objects
// // - means you can assign functions to variables, pass them around, and use them as arguments to other functions
// var arr = [1,2,3];
// for (var i = 0, len = arr.length; i < len; i++) {
// 	console.log(arr[i]);
// }

// // p23 - forEach iterates over all the array elements, passing each one as the first argument
// var arr = [1,2,3];
// arr.forEach(function(element) { // or arr.forEach(function(element, i) {
// 	console.log(element)
// })

// p24 - Listener and handlers
// listener is an object that listens for events.
