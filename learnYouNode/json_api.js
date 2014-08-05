var url = require('url');
var http = require('http');


http.createServer(function(request, response){

	var URL = url.parse(request.url, true);
	var path = URL.pathname;

	var date = new Date(URL.query.iso);
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	var json = "";


	if (path == '/api/parsetime'){
		response.writeHead(200, {'Content-Type': 'application/json'});
		json = JSON.stringify({hour:hours, minute:minutes, second:seconds});
		response.end(json);
	}
	else if (path == '/api/unixtime'){
		response.writeHead(200, {'Content-Type': 'application/json'});
		json = JSON.stringify({unixtime: date.getTime()});
		response.end(json);
	}
	else{
		response.writeHead(404);
	}
	response.end();

}).listen(process.argv[2]);

