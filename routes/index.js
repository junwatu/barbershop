var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
     
    ('OPTIONS' == req.method) ? res.send(200) : next();
    
});


router.get('/customer', function(req, res, next){
    res.json({
        customer: 'just me'
    })
})

module.exports = router;