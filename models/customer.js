var mongoose = require('mongoose');

var MONGODB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/barbershop';
var db = mongoose.createConnection(MONGODB_URI);

db.on('connected', function () {
    console.log('Connected to MongoDB.');
});

db.on('error', function (err) {
    console.error.bind(console, 'Connection to MongoDB error!.');
});

// Customer Schema
var CustomerSchema = new mongoose.Schema({
        //unique_id: Number,
        name: String,
        email: String,
        barber: String
    });

module.exports = db.model('Customer', CustomerSchema);