function findFirstN(n, arr) {
  if (n > arr.length) {
    console.log("ERROR: Insufficient Items");
    return;
  } else {
    let a = [];
    for (let i = 0; i < n; i++) {
      a.push(arr[i]);
    }
    return a;
  }
}

console.log(findFirstN(3, [1, 3]));
console.log(findFirstN(3, [1, 3, 6]));
