
var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var random_value = stuff[ Math.floor( Math.random() * 14 ) ];

var middle = stuff.length/2;

var sortedArray = function(arraytosort) {
	var sorted = arraytosort.sort(function (a, b) {
		return a - b;
	});

	sorted();
};

console.log(stuff);
console.log(sortedArray);