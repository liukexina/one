let a = 10;

let b = "abc";

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
}
let person1 = new Person("heihe","30");
person1.showName();

class Student extends Person{
    constructor(name,age){
        super(name,age);
    }
    lulu(){
        console.log(this.age);
    }
}
let person2 = new Student("LISI","50");
person2.showName();
person2.lulu();