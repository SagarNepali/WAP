/**Object contructor using new Function */
function Test(msg) {
  this.msg = msg;
}

Test.prototype.showMsg = function () {
  return this.msg;
};

const test1 = new Test("Hello");
const test2 = new Test("Yo");

console.log(test1.showMsg());
console.log(test2.showMsg());
console.log(test1.constructor); //default prototype property

/** Borrowing from prototypes */
let obj = {
  0: "Hello",
  1: "World",
  length: 2,
};

obj.join = Array.prototype.join; //join is function
console.log(
  obj.join(",") + " is a array like object with length :" + obj.length
);

/**
 * Find First N using Array.prototype
 */

Array.prototype.findFirstN = function (n) {
  const arr = [];
  if (n > this.length) {
    throw new Error("Insufficient length");
  }
  for (let i = 0; i < n; i++) {
    arr.push(this[i]);
  }
  return arr;
};

try {
  const nums = [1, 2, 3, 4, 5];
  console.table(nums.findFirstN(7));
} catch (error) {
  console.log(error.message);
}
const nums = [1, 2, 3, 4, 5];
console.table(nums.findFirstN(4));

const strings = ["a", "b", "c", "d"];
console.table(strings.findFirstN(2));
