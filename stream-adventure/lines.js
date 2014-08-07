var split = require('split')
var through = require('through')

var count = 0

process.stdin.pipe(split()).pipe(through(function(line){

	count++

	if (count % 2 == 0){
		this.queue(line.toUpperCase())
	}
	else {
		this.queue(line.toLowerCase())
	}
})).pipe(process.stdout)