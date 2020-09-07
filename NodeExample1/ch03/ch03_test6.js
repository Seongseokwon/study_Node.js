var Person = {}; //Person 객체 생성

Person.name = "석원";
Person.age = 11;

var add = function(a, b){
    return a + b;
} //변수에 함수 할당

Person.op = add;
//Person객체의 op속성으로 함수를 할당해준 변수를 넣어준다.

console.log("함수 실행 결과 :%d", Person.op(15,66));