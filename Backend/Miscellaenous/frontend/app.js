// function personMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, My name is ${this.name}`)
//         }
//     }
//     return person;
// }

// console.log(personMaker("Balu", 24));

//
// Constructor doesn't return anything ... its start with Capital letter
// function Person (name, age) {
//     this.name = name,
//     this.age = age
// }

// Person.prototype.talk = function() {
//     console.log(`My Name is  ${this.name}`)
// }
// const p1 = new Person("Balu", 24);
// const p2 = new Person("Om", 22);

// console.log(p1);
// console.log(p2);

//
// Using Classes 


class Person {
    constructor(name, age) {
        console.log("Person Parent Constructor call")
        this.name = name,
        this.age = age
    }
    talk() {
        console.log(`Hi ! My name is ${this.name}. I am ${this.age} year old...`)
    }
}

class Student extends Person{
    constructor(name, age, marks) {
        super(name, age)
        console.log("Student Chlid Constructor call")
        this.marks = marks
    }
    
}

class Teacher extends Person{
    constructor(name, age, subject) {
        super(name, age)
        console.log("Teacher Chlid Constructor call")
        this.subject = subject
    }
}

const std1 = new Student("Balu", 24, 95);
const tec1 = new Teacher("Om", 28, "English");



