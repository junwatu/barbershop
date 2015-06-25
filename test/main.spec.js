var request = require('supertest');
var should = require('should');
var app = require('../app.js');

describe('/api/customer', function() {
	
	var customer = {
		name: 'Mohawk',
		email: "iam@moh.awk",
		barber: "bald"
	}
	
	it('should save new customer POST /api/customer', function(done){
        request(app)
		    .post('/api/customer')
	        .set('Content-Type', 'application/json')
	        .set('Accept', 'application/json')
	        .expect('Content-Type', /json/)
			.send(customer)
			.expect(200, function(err, res){
			    if(err) {
					//console.log(err);
					done(err);
				} else {
					//console.log(res.body);
					done();
				}	
			})
	})
});