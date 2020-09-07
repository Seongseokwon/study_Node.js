//push를 하면 Users배열 뒤에 요소가 추가가 됩니다.
var Users = [
    {
        name : '소녀시대',
        age : 20
    },
    {
        name : '헬로',
        age : 98
    }
]

Users.push({name : '코코', age : 33})

console.log('사용자 수 : %d', Users.length);
console.log('첫번째 사용자 이름 : %s', Users[0].name);