var express = require('express');
var app = express();
var port = 3113;
var info = require('./package.json');
var routes = require('./routes');

app.get('/', function(req, res, next) {
    res.json({app:info.name});
});

app.use('/api', routes);

app.listen(port, function(){
    console.log(info.name+' run on port '+port);
})
