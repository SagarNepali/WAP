"use strict";

function max(num1, num2) {
  if (num1 > num1) {
    return num1;
  }
  return num2;
}

console.log("Q1: ", max(1, 2));

function maxOfThree(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      return num1;
    }
    return num3;
  } else if (num3 > num2 && num3 > num1) {
    return num3;
  }
  return num2;

  //return (a>b) ? ((a > c) ? a : c) : ((b > c ) ? b :c );
}

console.log("Q2:", maxOfThree(22, 51, 55));

function isVowel(ch) {
  const vowels = "aeiouAEIOU";
  if (ch.length == 1) {
    if (vowels.includes(ch)) return true;
  }

  return false;
}

console.log("Q3: ", isVowel("E"));

function sum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log("Q4: Sum :", sum([1, 2, 3, 4]));

function multiplies(numbers) {
  let m = 1;
  for (let i = 0; i < numbers.length; i++) {
    m *= numbers[i];
  }
  return m;
}

console.log("Q4: Mul :", multiplies([1, 2, 3, 4]));

function reverse(str) {
  return str.split("").reverse().join("");
}

console.log("Q5: String:", reverse("abcd"));

function findLongestWord(words) {
  let m = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > m) {
      m = words[i].length;
    }
  }
  return m;
}

console.log("Q6: ", findLongestWord(["This", "is", "Definitely", "not"]));

function filterLongWord(words, i) {
  let arr = [];
  for (let j = 0; j < words.length; j++) {
    if (words[j].length > i) {
      arr.push(words[j]);
    }
  }
  return arr;
}
console.log("Q7: ", filterLongWord(["This", "is", "Definitely", "not"], 2));

function computeSumOfSquares(numbers) {
  let sum = 0;

  numbers.filter((num) => (sum += Math.pow(num, 2)));
  return sum;

  //return numbers.map(n => n * n).reduce((sum,n) => sum + n);
}

console.log("Q8: Sum Of Squares: ", computeSumOfSquares([1, 2, 3]));

function printOddNumbersOnly(nums) {
  let arr = [];
  nums.filter((num1) => {
    if (num1 % 2 != 0) {
      arr.push(num1);
    }
  });
  return arr;
}

console.log("Q9: Odd Nos.: ", printOddNumbersOnly([1, 2, 3, 4]));

function computeSumOfSquaresOfEvenOnly(nums) {
  let sumOfSquares = 0;

  nums.filter((num) => {
    if (num % 2 == 0) {
      sumOfSquares += Math.pow(num, 2);
    }
  });
  return sumOfSquares;

  // return nums.filter(n => n%2==0).map(a => a * a).reduce((sum,n) => sum+n);
}

console.log(
  "Q10: Sum Of Squares of Even only: ",
  computeSumOfSquaresOfEvenOnly([1, 2, 3, 4])
);

function sumUsingReduce(numbers) {
  return numbers.reduce((x, y) => x + y);
}

console.log("Q11: Sum using reduce:", sumUsingReduce([1, 2, 3, 4]));

function multipliesUsingReduce(numbers) {
  return numbers.reduce((x, y) => x * y);
}

console.log("Q11: Multiply using reduce:", multipliesUsingReduce([1, 2, 3, 4]));

function findSecondBiggest(nums) {
  let second = 0,
    max = 0;

  max = nums.reduce((x, y) => {
    if (x > y) {
      return x;
    }
    return y;
  });

  nums.filter((num) => {
    if (num > second && second < max && num != max) {
      second = num;
    }
  });
  return second;
}

console.log("Q12: Second biggest", findSecondBiggest([1, 2, 3, 4]));
console.log("Q13: Fibonacci: ");
function printFibo(n, a, b) {
  let temp = 0;
  for (let i = a; i < n; i++) {
    console.log(a);
    temp = a + b;
    a = b;
    b = temp;
  }
}

printFibo(10, 0, 1);

function display_date_time() {
  var x = new Date();
  var x1 = x.getFullYear() + 1 + "-" + x.getMonth() + "-" + x.getDay();
  x1 = x1 + " " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
  document.getElementById("demo").innerHTML = x1;
  refreshDate();
}

function refreshDate() {
  var refresh = 1000; // Refresh rate in milli seconds
  var mytime = setTimeout("display_date_time()", refresh);
}

window.onload = () => {
  display_date_time();
};
