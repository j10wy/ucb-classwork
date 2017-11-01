var http = require("http");
var fs = require("fs");

var server = http.createServer(function (request, response) {
	var path = request.url;
	console.log(path)
	switch (path) {
		case "/":
			return page(request, response, path);
		case "/frameworks":
			return page(request, response, path);
		case "/food":
			return page(request, response, path);
		case "/movies":
			return page(request, response, path);
		default:
			return response.end("Hi");
	}
});

server.listen(8080, function () {
	console.log("Listening on PORT 8080");
});

function page(request, response, path) {
	if (path.length === 1) {
		path = "/index";
	}
	fs.readFile(`${__dirname}/html${path}.html`, function (error, data) {
		if (error) {
			throw error;
		}
		response.writeHead(200, {
			"Content-Type": "text/html"
		});
		response.end(data);
	});
}