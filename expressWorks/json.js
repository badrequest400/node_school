var express = require('express')
var fs = require('fs')

var app = express()

fs.readFile(process.argv[3], function(data){

	var json = JSON.parse(data)

	res.end(json)
})



app.listen(process.argv[2])