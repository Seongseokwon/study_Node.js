//forEach문을 사용하여 배열의 요소를 출력 할 수 있습니다.
var Users = [
    {
        name : '소고노노',
        age : 29
    },
    {
        name :'마나라아',
        age : 32
    },
    {
        name : '오리고기',
        age : 3
    }
]

console.log("배열의 요소 수 :%d", Users.length);
for(var i = 0; i <Users.length; i++)
    console.log("배열의  요소 #" + i + ': %s', Users[i].name);

console.log("\nforEach구문 사용하기");
Users.forEach(function(item, index){
    console.log("배열의 요소 #"+ index + ' : %s',item.name);
});