var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var icecreams = [{
		name: 'vanilla',
		price: 10,
		awesomeness: 3
	},
	{
		name: 'chocolate',
		price: 4,
		awesomeness: 8
	},
	{
		name: 'banana',
		price: 1,
		awesomeness: 1
	},
	{
		name: 'greentea',
		price: 5,
		awesomeness: 7
	},
	{
		name: 'jawbreakers',
		price: 6,
		awesomeness: 2
	},
];

app.listen(3000, function () {
	console.log("server running on port 3000");
});

app.get("/icecream/:name", function (req, res) {
	var icecream = req.params.name;
	res.render("index", {
		icecreams: icecreams,
		icecream: icecream
	});
});