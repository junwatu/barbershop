var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var info = require('./package.json');
var routes = require('./routes');

var port = 3113;

/**
app.use(function crossOrigin(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
     
    ('OPTIONS' == req.method) ? res.send(200) : next();
    
});
*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.json({app:info.name});
});

app.use('/api', routes);

app.listen(port, function(){
    console.log(info.name+' run on port '+port);
})
