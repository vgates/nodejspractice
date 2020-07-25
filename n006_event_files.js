// this code will just execute as a script
var fs = require('fs');
var rs = fs.createReadStream('./sample_files/apple.html');
rs.on('open', function () {
    console.log('The file is open');
});