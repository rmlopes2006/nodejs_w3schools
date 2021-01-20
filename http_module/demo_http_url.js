var http = require('http');

//Create a server object
http.createServer(function(req, res) {
    //req argument represents the request
    res.writeHead(200, {'Content-Type': 'text/html'}); //Add an HTTP Header (status code, response headers)
    res.write(req.url); //Write a response to the client
    res.end(); //End the response
}).listen(8080); //The server object listens on port 8080
