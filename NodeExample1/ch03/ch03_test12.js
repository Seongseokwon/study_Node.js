//shift는 배열의 가장 앞의 요소를 제거
//unshift는 배열의 가장 앞의 요소에 추가
var Users = [
    {
        name : '마나',
        age : 23
    },
    {
        name : '호잉',
        age : 24
    }
]

console.log('unshift() 호출 전 배열 요소의 수 : %d \n', Users.length);

Users.forEach(function(item, index){
    console.log("요소의 수 #" + index + ' : %s', item.name);
})
Users.unshift({name : '고구마', age : 2});
console.log('unshift() 호출 후 배열 요소의 수 : %d\n', Users.length);

Users.forEach(function(item, index){
    console.log("요소의 수 #" + index + ' : %s', item.name);
})
Users.shift();
console.log('shift() 호출 후 배열 요소의 수 : %d\n', Users.length);
Users.forEach(function(item, index){
    console.log("요소의 수 #" + index + ' : %s', item.name);
})