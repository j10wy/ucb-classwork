// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

// Initialize Firebase
var config = {
	apiKey: "AIzaSyB5rIWWh3Zqjywt6ObJQ0Bk5Ma4nEwmECI",
	authDomain: "ucbx-codersbay.firebaseapp.com",
	databaseURL: "https://ucbx-codersbay.firebaseio.com",
	projectId: "ucbx-codersbay",
	storageBucket: "",
	messagingSenderId: "406516783123"
};
firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
//var database = ...

var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;
// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the local data.
// This function allows you to update your page in real-time when the firebase database changes.

database.ref().on("value", function (snap) {

	var snapshot = snap.val();
	console.log(snapshot);
	// If Firebase has a highPrice and highBidder stored (first case)

	if (snapshot.highBidder && snapshot.highPrice) {
		// Set the local variables for highBidder equal to the stored values in firebase.

		highBidder = snapshot.highBidder;
		highPrice = parseInt(snapshot.highPrice);

		// change the HTML to reflect the newly updated local values (most recent information from firebase)
		$("#highest-bidder").text(highBidder);
		$("#highest-price").text(highPrice);

		// Print the local data to the console.
		console.log("Highest bidder:", highBidder);
		console.log("Highest price:", highPrice);


	} else {
		// Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
		// Print the local data to the console.
	}
});


// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button

$("#submit-bid").on("click", function (event) {
	// prevent form from submitting with event.preventDefault() or returning false
	event.preventDefault();

	// Get the input values
	var bidderName = $("#bidder-name").val(),
		bidderPrice = parseInt($("#bidder-price").val());

	// Log the Bidder and Price (Even if not the highest)
	console.log("bidderName", bidderName);
	console.log("bidderPrice", bidderPrice);

	// If Then statements to compare against previous high bidder
	if (bidderPrice > highPrice) {
		console.log("Is bidderPrice > highPrice?", bidderPrice > highPrice);

		// Alert that they are High Bidder
		alert("You are the highest bidder!");
		
		// Save the new price in Firebase
		database.ref().set({
			highBidder: bidderName,
			highPrice: bidderPrice
		});

		// Log the new High Price
		console.log("New highPrice", highPrice);
	} else {
		// Else tell user their bid was too low via alert
		alert("You are not the highest bidder");
	}
});

