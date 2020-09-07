//delete 키워드를 사용하면 지정한 인덱스의 값만 비워진다.
var Users = [
    {
        name : '고굼',
        age : 13
    },
    {
        name : '나보',
        age : 24
    },
    {
        name : '토토',
        age : 11
    }
]

console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : %d', Users.length);

delete Users[1];
console.log('delete 키워드로 배열 삭제 후 ');
console.dir(Users);

Users.splice(1,0,{name : '칙칙폭', age : 31});
console.log('splice로 요소를 인덱스 1에 추가한 후');
console.dir(Users);

Users.splice(2, 1);
console.log('splice로 인덱스 2의 요소를 1개 삭제한 후');
console.dir(Users);