function Person(name, age){
    
    this.name = name;
    console.log(this.name)
    this.age = age;
}

// Person.prototype.walk = function(speed){
//     console.log(speed + 'km 속도로 걸어갑니다');
// }

var person1 = new Person('고구마', 12);

// console.log(person1.name)
// person1.walk(20);