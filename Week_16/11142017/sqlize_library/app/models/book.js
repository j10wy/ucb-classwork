// Dependencies
// =============================================================
var Sequelize = require('sequelize');
var sequelize = require('../config/connection');

// Require the sequelize library
// Require the connection to the database (connection.js)

// Create a "Book" model with the following configuration

// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER
// 5. Set timestamps to false on this model

const Book = sequelize.define('book', {
	author: Sequelize.STRING,
	title: Sequelize.STRING,
	genre: Sequelize.STRING,
	pages: Sequelize.INTEGER,
}, {
	timestamps: false
});

// Sync model with DB
Book.sync();

// Export the book model for other files to use
module.exports = Book;