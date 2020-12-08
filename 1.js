function getters(person) {
    return "hello world" + person;
}
var user = '123';
console.log(getters(user));
var Person = /** @class */ (function () {
    function Person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Person.prototype.sayName = function () {
        console.log(this.name);
    };
    Person.prototype.sayAge = function () {
        console.log(this.age);
    };
    Person.prototype.saySex = function () {
        console.log(this.sex);
    };
    return Person;
}());
var p1 = new Person("张帅", 18, 1);
p1.sayName();
p1.sayAge();
