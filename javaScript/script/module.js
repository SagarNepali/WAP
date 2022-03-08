console.log("===========LAB 8 ==========");

const count = (function () {
  let counter = 0;

  function addCount() {
    counter += 1;
  }

  function resetCount() {
    counter = 0;
  }

  function getCount() {
    return counter;
  }

  function addValue(n) {
    counter += n;
  }

  return {
    add: addCount,
    reset: resetCount,
    get: getCount,
    makeAdder: addValue,
  };
})();

console.log("Q6: ");
count.add();
count.add();
console.log(count.get());
count.reset();
console.log(count.get());

/**
 * Q7
 * free variable in add() function is counter;
 *
 * In the context of closure, free variable are the variables that are not
 * neither locally declared nor passed as parameter
 *
 * **/

console.log("Q8 : ");
const countByNum = function () {
  let count = 0;

  return {
    makeAdder: function (n) {
      count += n;
    },
    get: function () {
      return count;
    },
  };
};

const add5 = countByNum();
add5.makeAdder(5);
add5.makeAdder(5);
add5.makeAdder(5);
console.log(add5.get());

const add7 = countByNum();
add7.makeAdder(7);
add7.makeAdder(7);
add7.makeAdder(7);
console.log(add7.get());

/**
 * Q9:
 * We can make module and reuse the module when necessary. By this the encapsulation
 * could be achieved as well as save the global namespace with use of closures
 * We can use revealing module design pattern to achieve this.
 *
 */

console.log("Q10: ");
const employeeModule = () => {
  let name = "";
  let age = 0;
  let salary = 0;

  const getAge = () => {
    return age;
  };

  const getSalary = () => {
    return salary;
  };

  const getName = () => {
    return name;
  };

  const setAge = (newAge) => {
    age = newAge;
  };

  const setSalary = (newSalary) => {
    salary = newSalary;
  };

  const setName = (newName) => {
    name = newName;
  };

  const increaseSalary = (percentage) => {
    return getSalary() + getSalary() * (percentage / 100);
  };

  const incrementAge = () => {
    return getAge();
  };

  return {
    setAge: setAge,
    setName: setName,
    setSalary: setSalary,
    increaseSalary: increaseSalary,
    incrementAge: getAge,
  };
};

const employee = employeeModule();

employee.setName("John");
employee.setSalary(2000);
employee.setAge(20);
console.log(employee.incrementAge());
console.log(employee.increaseSalary(2));
console.log(employee.incrementAge());

console.log("Q11 :");
employee.address = () => {
  let address = 0;
};

employee.setAddress = (addr) => {
  address = addr;
};

employee.getAddress = () => {
  return address;
};

employee.setAddress("IA");
console.log(employee.getAddress());
