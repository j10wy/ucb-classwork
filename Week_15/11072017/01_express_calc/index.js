var express = require("express");
var bodyparser = require("body-parser");

var app = express();

app.listen(3000, function () {
	console.log("ITS ALIVE!");
});

app.get("/", (req, res) => {
	res.send("hello");
});

app.get("/:sign/:num1/:num2", function (req, res) {
	var sign = req.params.sign
	var num1 = parseInt(req.params.num1);
	var num2 = parseInt(req.params.num2);
	var result = "";

	switch (sign) {

		case "addition":
			result = num1 + num2;
			break;

		default:
			res.send("hi!");
	}
	res.send(result.toString());
});