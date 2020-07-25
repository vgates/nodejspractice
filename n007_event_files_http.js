var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<br/>Initiating file open");
    var fs = require('fs');
    var rs = fs.createReadStream('./sample_files/apple.html');
    rs.on('open', function () {        
        res.end('<br/><b>File opened!</b>');
    });
}).listen(4547);