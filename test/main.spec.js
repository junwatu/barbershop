var request = require('supertest');
var should = require('should');
var app = require('../app.js');

describe('/api/customer', function() {
	
	var customer = {
		name: 'Mohawk',
		email: "iam@moh.awk",
		barber: "bald"
	}
	
	var id;
	
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
					res.body.should.have.property('name', customer.name);
					id = res.body._id;
					done();
				}	
			})
	});
	
	it('should get customer by id GET /api/customer/:customerId', function(done){
		request(app)
		    .get('/api/customer/'+id)
	        .set('Content-Type', 'application/json')
	        .set('Accept', 'application/json')
	        .expect('Content-Type', /json/)
			.expect(200, function(err, res){
			    if(err) {
					done(err);
				} else {
					res.body.customer[0].should.have.property('_id', id);
					done();
				}	
			})
	})
	
	
});