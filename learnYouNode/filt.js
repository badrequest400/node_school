var fs = require('fs');
var path = require('path');

module.exports = function(pathName, ext, callback) {

	fs.readdir(pathName, function(err, list){
		
		if(err) {
			return callback(err)
		}

		list.forEach(function(err, file){

			if (path.extname(file) == '.' + ext) {
				return callback(null, path.basename(file));
			}
			return;
		});
	});
}