var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Example URL: http://localhost:4547/helloboys.html?year=2017&month=July

    //req represents the request from the client as an object (http.IncomingMessage object)
    res.write("<br/>Displays part of url: " + req.url); //displays the part of the url that comes after the domain name

    var q = url.parse(req.url, true).query; ////returns an object: { year: 2017, month: 'february' }
    var txt = "Year Passed-" + q.year + " || Month Passed-" + q.month;
    res.write("<br/><br/>Parsing url: " + txt); //get year and month

    //URL Module
    var q = url.parse(req.url, true);
    res.write("<h5/>Parsing url </h5>");
    res.write("Pathname: " + q.pathname); //returns helloboys.html
    res.write("<br/>Search: " + q.search); //returns ?year=2017&month=July
    res.write("<br/>Hostname: " + q.host); //returns 
    res.end();
}).listen(4547);