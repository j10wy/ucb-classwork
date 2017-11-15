var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Character = sequelize.define("character", {
	routeName: {
		type: Sequelize.STRING
	},
	name: {
		type: Sequelize.STRING
	},
	role: {
		type: Sequelize.STRING
	},
	age: {
		type: Sequelize.INTEGER
	},
	forcePoints: {
		type: Sequelize.INTEGER
	}
}, {
		timestamps: false
	});

// Syncs with DB
Character.sync();

module.exports = Character;