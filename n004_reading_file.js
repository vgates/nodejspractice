var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('sample_files/sample_file.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(4547);

/*
For creating new files:
    fs.appendFile()
    fs.open()
    fs.writeFile()

For updating files:
    fs.appendFile()
    fs.writeFile()

Delete file
    fs.unlink()

Rename file
    fs.rename()
*/