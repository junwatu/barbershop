#Barbershop REST API

Make sure Node.js installed and MongoDB running on your system.

##Install

Clone this repo and then install the dependencies.

    $ npm install
    
##Run

To run this server type this command

    $ npm start
    
open browser or use curl or whatever tool to check this url

    http://localhost:3113

##Test

Testing using mocha so make sure mocha installed in your system then type this command

    $ npm test
    
##API

###**`/api/customer`**

All example commands below using httpie.

**POST**

    $ http --form POST localhost:3113/api/customer name="Curly" email="sembarang@dot.com" barber="Mohawk"
    
**GET**

    $ http http://localhost:3113/customer
    
###**`/api/customer/:customerId`**

To get customer by id you can test with type this command

    $ http http://localhost:3113/customer/<customerIdHere>    


