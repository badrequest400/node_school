var net = require('net');

net.createServer(function(socket){
	date = new Date();
	res = date.getFullYear() + '-' + pad((date.getMonth()+1)) + '-' + pad(date.getDate()) + ' ' + pad(date.getHours()) + ':' + pad(date.getMinutes());
	socket.end(res + '\n');

}).listen(process.argv[2]);


function pad(num) {
	if (num < 10)
		num = '0' + num.toString();
	return num
}
