// Initialize Firebase
var config = {
  apiKey: "AIzaSyBvQvE42AIRfle2pRpwt5TiL_IZrvI7yhQ",
  authDomain: "ucbx-47b4c.firebaseapp.com",
  databaseURL: "https://ucbx-47b4c.firebaseio.com",
  projectId: "ucbx-47b4c",
  storageBucket: "ucbx-47b4c.appspot.com",
  messagingSenderId: "985704633877"
};

firebase.initializeApp(config);

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
var database = firebase.database();

database.ref().value


// Print the initial data to the console.
console.log(database);

// Change the html to reflect the initial value.
$("#click-value").text(initialValue);

// Change the clickCounter to match the data in the database


// Log the value of the clickCounter


// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1


  // Alert User and reset the counter


  // Save new value to Firebase


  // Log the value of clickCounter


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue


  // Save new value to Firebase


  // Log the value of clickCounter


  // Change the HTML Values

});
