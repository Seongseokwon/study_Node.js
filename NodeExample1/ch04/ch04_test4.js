var Calc = require('./calc3');

var calc = new Calc();
console.log("%d", calc.add(8,12));
calc.emit('stop');

console.log(Calc.title + '에 stop 이벤트 전달함');