var http = require('http');
var date = require('./myfristmodule');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are corrently: " + date.myDateTime());
    res.end();
}).listen(8080);
