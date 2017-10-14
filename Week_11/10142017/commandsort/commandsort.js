var argv = process.argv;
var arrayToSort = [];

argv.map(function (item, index) {
	if (index > 1) {
		arrayToSort.push(parseInt(item));
	}
});

var sortedArray = arrayToSort.sort(function(a,b){
	return a - b;
});

console.log(sortedArray);