var express = require('express');
var router = express.Router();
var Customer = require('../models/customer.js');

router.get('/customer', function(req, res){
   Customer.find(function (err, data) {
        if (err) {
            res.json({error: err})
        } else {
            res.json({customers: data}); 
        };
    })
});

router.post('/customer',function(req, res){
    var customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        barber: req.body.barber
    });

    customer.save(function (err, data) {
        if (err) {
            res.send({error:err});
        }else {
            console.log('Save data: ' + data);
            res.json({status: 'ok'});
        }
    })
});

router.get('/customer/:customerId', function(req, res){
    res.json({
        ops: 'get customer by id'
    })
});

module.exports = router;
