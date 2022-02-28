// lev1_1

class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}

let ball1 = new Ball();
console.log(ball1.ballType);  //regular

let ball2 = new Ball("super");
console.log(ball2.ballType);


// lev1_2

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        console.log(`${this.name} is ${this.age} old`);
        return this;
    }
}

let person1 = new Person("Peter", 55);
person1.info();

//lev1_3

let result = document.getElementById("result");
let nameNew = document.getElementById("name");
let ageNew = document.getElementById("age");
let exampassed = document.getElementById("examCheck")
let button = document.getElementById("button");

class Student extends Person {
    write() {
        if (exampassed.checked) {
            result.innerHTML = `${this.name}, ${this.age} has passed`;
            result.style.color = "black"
            return this;
        }
        else {
            result.innerHTML = `${this.name}, ${this.age} has not passed`;
            result.style.color = "red";
            return this;
        }
    }
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("test", ageNew.value, nameNew.Value);
    let student1 = new Student(nameNew.value, ageNew.value);
    student1.write();
})

