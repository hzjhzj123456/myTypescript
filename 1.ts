function getters(person:string){
    return `hello world${person}`
}
const user = '123'
console.log(getters(user));

class Person{
    name:string;
    age:number;
    sex:number;
    constructor(name:string,age:number,sex:number){
        this.name = name;
        this.age = age;
        this.sex = sex
    }
    sayName():void{
        console.log(this.name);
    }
    sayAge():void{
        console.log(this.age);
    }
    saySex():void{
        console.log(this.sex);
    }
}

let p1 = new Person("张帅",18,1)
p1.sayName();
p1.sayAge();