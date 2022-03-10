import Person from "./module/person.js";
import Employee from "./module/employee/employee.js";

console.log("Q1");
const persons = new Array();

persons.push(new Person("Ana Smith", new Date(1998, 11, 15)));
persons.push(new Person("Bob Jone", new Date(1945, 10, 16)));
persons.push(new Person("Carlos Slim Helu", new Date(1976, 8, 24)));

persons.forEach((p) => {
  console.log(p.toString());
});

console.log("Q2:");

const emp = new Employee(
  "Anna",
  new Date(2020, 1, 11),
  249995.55,
  new Date(2022, 2, 22)
);

emp.doJob("Programmer");
