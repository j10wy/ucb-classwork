var firstParam = parseInt(process.argv[2]);
var secondParam = parseInt(process.argv[3]);

console.log(firstParam);
console.log(secondParam);

if (firstParam === secondParam) {
	console.log("Parameters are equal"); 
} else {
	console.log("Parameters are not equal"); 
}

