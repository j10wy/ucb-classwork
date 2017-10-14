var operator = process.argv[2];
var firstParam = parseInt(process.argv[3]);
var secondParam = parseInt(process.argv[4])

if (operator == 'add') {
	console.log(firstParam + secondParam);
} else if (operator == 'subtract') {
	console.log(firstParam - secondParam);
} else if (operator == 'multiply') {
	console.log(firstParam * secondParam);
} else if (operator == 'divide') {
	console.log(firstParam / secondParam);
} else if (operator == 'remainder') {
	console.log(firstParam % secondParam);
} else if (operator === 'exp') {
	console.log(Math.pow(firstParam, secondParam));
}