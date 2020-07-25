var http = require('http');
var genVars = require('./modules/module_author'); //module_author.js file is available inside modules folder

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The author here is: " + genVars.authorHere());
  res.end();
}).listen(4547);