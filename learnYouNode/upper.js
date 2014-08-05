var map = require('through2-map');
var http = require('http');


// Solution 1 - using pipes, probably the best, most professional ---> response.end() is taken care of automatically

http.createServer(function(request, response){

	request.pipe(map(function(chunk){
			return chunk.toString().toUpperCase();
		})).pipe(response);


}).listen(process.argv[2]);




// Solution 2 - continuously writing data with each request, don't forget to send response.end() at end of request otherwise connection
//				stays open and program hangs

http.createServer(function(request, response){

	request.on('data', function(data){
		response.write(data.toString().toUpperCase());
	});
	request.on('end', function(){
		response.end();
	});

}).listen(process.argv[2]);



// Solution 3 - collecting all the chunks into string var and sending it in one go by response.end() at request end

var res = '';

http.createServer(function(request, response){

	request.on('data', function(data){
		res += (data.toString().toUpperCase());
	});
	request.on('end', function(){
		response.end(res);
	});

}).listen(process.argv[2]);