var Users = [
    {
        name : 'A',
        age : 21
    },
    {
        name : 'B',
        age : 22
    },
    {
        name : 'C',
        age : 23
    },
    {
        name : 'D',
        age : 24
    }
]

console.log("배열 요소의 수 : %d", Users.length);
console.log('원본 Users');
console.dir(Users);

var Users2 = Users.slice(1,3);

console.log("slice()로 잘라낸 후 Users2");
console.dir(Users2);

var Users3 = Users2.slice(1);

console.log('slice()로 잘라낸 후 Users3');
console.dir(Users3);