var express = require("express");
var body = require("body-parser");
var mysql = require("mysql");
var app = express();

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'seinfeld_db'
});

app.get("/cast", function (req, res) {
	var html = "";
	db.query("SELECT * FROM actors ORDER BY id ASC", function name(error, results) {
		for (var i = 0; i < results.length; i++) {
			
		}
	})
	res.end();
});

app.listen(3000, function () {
	console.log("running on port 3000");
});