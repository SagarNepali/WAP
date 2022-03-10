export default class Person {
  constructor(name, dob) {
    this.name = name;
    this.dateOfBirth = dob;
  }

  getName() {
    return this.name;
  }

  setName(_name) {
    this.name = _name;
  }

  getDateOfBirth() {
    return this.getDateOfBirth;
  }

  setDateOfBirth(_dob) {
    this.dateOfBirth = _dob;
  }

  toString() {
    return `Name: ${this.getName()}, DateOfBirth: ${this.dateOfBirth}`;
  }
}
