//자바스크립트 객체 사용하기
var Person = {};

Person['age'] = 20;
Person['name'] = '소녀시대';
Person.mobile = '010-1234-5678';

console.log("나이 : %d", Person.age);
console.log("이름 : %s", Person['name']);
console.log("핸드폰 번호 : %s", Person.mobile);