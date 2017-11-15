// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps

  app.get('/chirps', function (req, res) {
    connection.query('SELECT * FROM chirps', function (error, results) {
      console.log(results);
    })
  });

  // Add a chirp

  app.get('/add', function (req, res) {
    connection.query('SELECT * FROM chirps', function (error, results) {
      console.log(results);
    })
  });

};