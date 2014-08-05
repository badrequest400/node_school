var fs = require('fs');


buffer = fs.readFileSync(process.argv[2]);

var lines = buffer.toString().split('\n');
var count = 0;

for (var i=0; i < lines.length - 1; i++) {
	count ++;
}

console.log(count)