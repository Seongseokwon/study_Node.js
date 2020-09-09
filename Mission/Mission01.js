var fs = require('fs');
var readline = require('readline');

var infile = fs.createReadStream('./customer.txt');
var reader = readline.createInterface(infile, process.stdout);
                                      
reader.on('line', function(line){
    console.log('한줄 읽음 : ' +line);
    
    var tokens = line.split(" ");
    console.log(tokens[0]);
})
