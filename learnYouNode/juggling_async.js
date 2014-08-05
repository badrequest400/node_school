var http = require('http');

var first = '';
var second = '';
var third = '';

var dfirst = false;
var dsecond = false;
var dthird = false;

http.get(process.argv[2], function(response){

	response.on('data', function(data){
		first += data.toString();
	});
	response.on('end', function(){
		dfirst = true;

		if (dfirst == true) {
			console.log(first);

			if (dsecond == true) {
				console.log(second);

				if (dthird == true) {
					console.log(third);
				}
			}
		}
	});
});
http.get(process.argv[3], function(response){

	response.on('data', function(data){
		second += data.toString();
	});
	response.on('end', function(){
		dsecond = true;

		if (dfirst == true) {
			console.log(first);

			if (dsecond == true) {
				console.log(second);

				if (dthird == true) {
					console.log(third);
				}
			}
		}
	});
});
http.get(process.argv[4], function(response){

	response.on('data', function(data){
		third += data.toString();
	});
	response.on('end', function(){
		dthird = true;

		if (dfirst == true) {
			console.log(first);

			if (dsecond == true) {
				console.log(second);

				if (dthird == true) {
					console.log(third);
				}
			}
		}
	});
});

