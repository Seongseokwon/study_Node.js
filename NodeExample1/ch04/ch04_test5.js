var fs = require('fs');
var path = require('path');
var test = fs.readFileSync(__dirname+'/hello.txt', 'utf8')
console.log(test);