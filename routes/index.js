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
            res.json(data);
        }
    })
});

router.get('/customer/:customerId', function(req, res){
    var id = req.params.customerId;

    Customer.find({_id:id}, function(err, data){
        if(err) {
            res.json({error:err});
        }else {
            res.json({
                customer: data
            });
        }
    })
});

module.exports = router;
