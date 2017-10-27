var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'music_db'
});

connection.connect(function (error) {
	if (error) {
		throw error;
	}
	console.log("connected as id:", connection.threadId);

	read();
	selectArtist("Nick Jame$");
	displayArtists();
	connection.end();
});


function read() {
	connection.query("SELECT * FROM music", function (err, result) {
		if (err) {
			throw Error
		};
		console.log(JSON.stringify(result, null, 2));

	});
}

function selectArtist(artistName) {
	connection.query("SELECT * FROM music WHERE artist=?", [artistName], function (err, result) {
		if (err) {
			throw Error
		};
		console.log(JSON.stringify(result, null, 2));

	});
}

function displayArtists() {
	connection.query("SELECT `artist` FROM music", function (err, result) {
		if (err) {
			throw Error
		};
		console.log(JSON.stringify(result, null, 2));
	});
}