const connection = require('./connection');

var orm = {
	partiesByCost: partiesByCost,
	partiesByName: "",
	clientPartyJoin: ""
};

function partiesByCost(partiesTable,partiesCost) {
	connection.query('SELECT * FROM ?? ORDER BY ?? DESC', [partiesTable, partiesCost], function (error, results, fields) {
		// error will be an Error if one occurred during the query
		// results will contain the results of the query
		// fields will contain information about the returned results fields (if any)
		console.log(results);
	});
}


module.exports = orm;