var express = require('express')

var app = express()

app.get('/search', function(req, res){

	res.end({'results': req.query.results, 'include_tabs': req.query.include_tabs})

})

app.listen(process.argv[2])