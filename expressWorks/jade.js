var express = require('express')
var path = require('path')

var app = express()

app.set('view engine', 'jade')
app.set('views', process.argv[3])
app.get('/home', function(req,res){

	res.render('index', {date: new Date().toDateString()})
})


app.listen(process.argv[2])




// project from scratch, working with own template

var express = require('express')
var path = require('path')

var app = express()

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates')) /// getting path to templates folder located in same dir --> __dirname is absolute path to script 
app.get('/home', function(req,res){

	res.render('jade', {date: new Date().toDateString()})
})


app.listen(process.argv[2])