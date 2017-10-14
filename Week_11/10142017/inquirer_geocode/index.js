var geocoder = require('geocoder');
var cityState = process.argv[2];

geocoder.geocode(cityState, function ( err, data ) {
	console.log(JSON.stringify(data));
  });