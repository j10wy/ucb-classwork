// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../model/character");

// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {

      // Then display the JSON for ONLY that Character.
      Character.findAll().then(characters => {
        console.log(users)
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      Character.findAll().then(characters => {
        console.log(users)
      });
    }

  });

  // If a user sends data to add a new Character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var character = req.body;

    // Then send it to the  to "save" into the DB.
    Character.findAll().then(characters => {
      console.log(users)
    })

  });
};
