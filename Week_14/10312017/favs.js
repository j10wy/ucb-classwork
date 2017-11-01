var http = require("http");
var fs = require("fs");

var server = http.createServer(function (request, response) {
	var path = request.url;

	switch (path) {
		case "/":
		return foods(request, response);
		default:
		return response.end("Hi");
	}
});

server.listen(8080, function () {
	console.log("Listening on PORT 8080");
});

function foods(request, response) {
	fs.readFile(`${__dirname}/html/index.html`, function (error, data) {
		if (error) {
			throw error;
		}
		response.end(data);
	});
}