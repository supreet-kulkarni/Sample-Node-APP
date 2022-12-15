var http = require('http');

//create a server object:
http
  .createServer(function (req, res) {
    res.write('Simple node app \n'); //write a response to the client
    res.write('Served from ' + req.socket.localAddress + '\n');
    res.end(); //end the response
  })
  .listen(80); //the server object listens on port 80
