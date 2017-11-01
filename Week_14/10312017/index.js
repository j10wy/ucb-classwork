var http = require("http");
var server = http.createServer(handleRequest);
var niceServer = http.createServer(handleRequest);
var meanServer = http.createServer(handleRequest);
var fs = require('fs');

function handleRequest(request, response) {
	console.log(request);
	response.end(`It works! [Path:${request.url}]`);
}

server.listen(8080, function () {
	console.log(`Server listening on port 8080`);
});

niceServer.listen(7000, function () {
	console.log(`You're great!`);
});

meanServer.listen(7500, function () {
	console.log(`You suck!`);
});