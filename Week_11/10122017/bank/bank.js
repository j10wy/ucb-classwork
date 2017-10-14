var fs = require('fs');
var transaction = process.argv[2];
var transactionAmount = parseInt(process.argv[3]);

if (!transaction) {
	console.log("Missing transaction type");
} else {
	fs.readFile('bank.txt', 'utf-8', function (error, data) {
		switch (transaction) {
			case 'total':
				total();
				break;
			case 'deposit':
				deposit();
				break;
			case 'withdraw':
				// function(){}
				break;
			case 'lotto':
				// function(){}
				break;

		}
	});
}

function total() {
	var totalsArray = [];
	fs.readFile('bank.txt', 'utf-8', function(error, response){
		totalsArray = response.split("\n");
		totalsArray.map(function(transactionLine){
			var transactionArray = transactionLine.split("$");
			console.log(transactionArray[transactionArray.length -1]);
			
		});
	});
}

function deposit() {
	var date = Date.now();
	var amount = transactionAmount;
	// var transactionBreak = "\n-------------------------------------\n";
	var transactionHistory = `${date}: ${transaction} | $${amount} \n`
	fs.appendFile('bank.txt', transactionHistory, 'utf8', function (error, response) {
		if (error) {
			throw Error;
		}
		console.log(`You have deposited ${transactionAmount}`);
	});
}