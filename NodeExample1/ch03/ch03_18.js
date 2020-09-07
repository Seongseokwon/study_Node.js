//함수는 객체 역할을 할 수 있다.
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed){ //prototype속성을 추가하면 인스턴스 객체를 만들 때 메모리를 효율적으로 관리 할 수 있다.
    console.log(speed +'km 속도로 걸어갑니다');
} //프로토타입 객체를 정의한후

//new 연산자를 사용하여 인스턴스 객체들을 만들수 있습니다.
var person1 = new Person('고기', 20);
var person2 = new Person('태양', 22);
//함수 중에서 new연산자로 호출되는 함수는 객체를 만들기 위한 함수로 분류되며,
//이러한 함수를 생성자(Constructor) 라고 합니다
console.log(person1.name + '객체의 walk(10)을 호출 합니다');
person1.walk(10);