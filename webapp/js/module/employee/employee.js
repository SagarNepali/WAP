import Person from "../person.js";

export default class Employee extends Person {
  #salary;
  #hireDate;

  constructor(name, dob, salary, hireDate) {
    super(name, dob);
    this.#salary = salary;
    this.#hireDate = hireDate;
  }

  doJob(jobTitle) {
    console.log(`${this.name} is a ${jobTitle} who earns ${this.#salary}`);
  }
}
