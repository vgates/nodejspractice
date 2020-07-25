var http = require('http');
var url = require('url');
var fs = require('fs');

// Example URL: http://localhost:4547/orange.html
// Example URL: http://localhost:4547/apple.html
// Example URL: http://localhost:4547/helloworld.html

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "./sample_files" + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(4547);