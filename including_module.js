var http = require('http');
var genVars = require('./module_author');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The author here is: " + genVars.authorHere());
  res.end();
}).listen(4547);