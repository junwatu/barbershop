var express = require('express');
var router = express.Router();
var Customer = require('../models/customer.js');

router.get('/customers', function(req, res){
   Customer.find(function (err, data) {
        if (err) {
            res.json({error: err})
        } else {
            res.json({customers: data}); 
        };
    })
})

router.post('/customers',function(res, res){
    res.json({
        ops: 'add new customer'
    })
})

router.get('/customers/:customer-id', function(req, res){
    res.json({
        ops: 'get customer by id'
    })
})


module.exports = router;
