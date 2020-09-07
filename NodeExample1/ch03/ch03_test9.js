//push를 통해서 변수에 담아둔 함수를 객체에 넣어 줄 수 있습니다.
var Users = [
    {
        name : '코코모모',
        age : 12
    },
    {
        name : '모나코코',
        age : 13
    }
]

var add = function(a, b){
    return a + b;
}

Users.push(add);

console.log("배열 요소의 수 :%d",Users.length);
console.log("새로 추가된 함수의 결과 : %d", Users[2](Users[1].age,Users[0].age))