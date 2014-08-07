var through = require('through')

var tr = through(write, end)

function write(buff) {

	var upped = buff.toString().toUpperCase()
	this.queue(upped)
}
function end(){this.queue(null)}

process.stdin.pipe(tr).pipe(process.stdout)