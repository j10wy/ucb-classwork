var connection = require("../config/connection.js");

orm = {
	selectAll: function () {
		connection.query('SELECT * FROM chirps', function (error, results) {
			console.log(results);
		});
	},
	addNew: function () {
		connection.query('SELECT * FROM chirps', function (error, results) {
			console.log(results);
		});
	}
}


module.exports = orm;