var express = require('express');
var app = express ();
var bodyParser = require('body-parser');
var path = require('path');
var pg = require('pg');
var animals = require('./routes/animals');
var random = require('./routes/randomNumber');

var connectionString = 'postgres://localhost:5432/assessment';
app.use(bodyParser.urlencoded({extended:true}));
app.set('port', (process.env.PORT || 5000));

app.use('/animals', animals);
app.use('/random', random);

app.get('/*', function(req, res) {
 var file = req.params[0] || 'views/index.html';
 res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function() {
 console.log('server is ready on port: ' + app.get('port'));
});
