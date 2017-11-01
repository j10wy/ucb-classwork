var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	res.end("Hello");
});

server.listen(8080, function(){
	console.log("Listening on PORT 8080");
});