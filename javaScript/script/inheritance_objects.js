/** LAB 9 */

"use strict";

console.log("========LAB 9=============");

//Q1
let person = {
  name: null,
  dateOfBirth: null,
  getName: () => {
    return this.name;
  },
  setName: (name) => {
    this.name = name;
  },
};

const johnObj = Object.create(person);
johnObj.setName("John");
johnObj.dateOfBirth = new Date(1998, 11, 10);

console.log("The person's name is " + johnObj.getName());
console.log(johnObj.getName() + " was born on " + johnObj.dateOfBirth);
console.log(
  johnObj.getName() +
    " was born on " +
    new Intl.DateTimeFormat().format(johnObj.dateOfBirth)
);

console.log("Q2: ");

let emp = {
  salary: 0,
  hireDate: null,

  doJob: function (jobTitle) {
    console.log(
      this.getName() + " is a " + jobTitle + " who earns $" + this.salary
    );
  },

  setSalary: function (salary) {
    this.salary = salary;
  },
};

Object.setPrototypeOf(emp, person);

const anna = Object.create(emp);
anna.setName("Anna");
anna.setSalary("249995.50");
anna.doJob("programmer");

console.log("Q3");

function Person(name, dateOfBirth) {
  this.name = name;
  this.dateOfBirth = dateOfBirth;

  this.toString = function () {
    console.log("Name: " + this.name + " , DateOFBirth: " + this.dateOfBirth);
  };
}

// Person.prototype.toString = function () {
//   console.log("Name: " + this.name + " , DateOFBirth: " + this.dateOfBirth);
// };

const p = new Person("Peter", "November 10,1985");
p.toString();
