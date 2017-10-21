//Weather app
var weather = require('weather-js');
var user = process.argv[2];
var location = process.argv[3];
var dates = process.argv[4];
var fs = require('fs');

function UserSearch(name, location) {
	this.name = name;
	this.location = location;

	var username = this.name;
	var userLocaiton = this.location;

	weather.find({
		search: this.location,
		degreeType: 'F'
	}, function (err, result) {
		var dataToLog = "Name: " + username + "\n" + "Location: " + userLocaiton + "\n" + "Time: " + Date.now() + "\n" + "--------------" + "\n"; 
		if (err) console.log(err);

		console.log(JSON.stringify(result, null, 2));

		fs.appendFile('history.txt', dataToLog, (err) => {
			if (err) throw err;
			console.log('The“ data to append” was appended to file!');
		});

	});

}

function logHistory() {
	fs.readFile('history.txt', 'utf8', (err, data) => {
		if (err) throw err;
		console.log(data);
	  });
}

switch (user) {
	case("admin"):
	logHistory();
	break;
	default:
	UserSearch(user,location);
}