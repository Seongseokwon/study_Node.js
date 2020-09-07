//push() -> 배열의 끝에 요소를 추가 합니다.
//pop() -> 배열의 끝에 있는 요소를 삭제 합니다.
//Last In First Out  ==> Stack
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
console.log('push()호출전 배열의 요소의 수 : %d', Users.length);

Users.push({name : '고구마', age : 2});
console.log('push()호출후 배열의 요소의 수 : %d', Users.length);

Users.forEach(function(item,index){
    console.log("배열의 요소의수 #" +index+ ': %s', item.name);
})

Users.pop();
Users.forEach(function(item,index){
    console.log("배열의 요소의수 #" +index+ ': %s', item.name);
})
console.log('pop()호출후 배열의 요소의 수 : %d', Users.length);