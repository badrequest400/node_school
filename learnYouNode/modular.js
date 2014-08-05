var filt = require('./filt')

filt(process.argv[2], process.argv[3], function(err, data){
	
	if (err) {
		console.error(err);
	}

	console.log(data);
});