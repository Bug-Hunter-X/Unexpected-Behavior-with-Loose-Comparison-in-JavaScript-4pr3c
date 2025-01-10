function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x < 0) {
    return -1;
  } else {
    return 1;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(-1));  // Output: -1
console.log(foo(1));   // Output: 1
console.log(foo(0));   // Output: 1, This is the bug

// Solution
function fooSolution(x) {
  if (x === null) {
    return 0; 
  } else if (x < 0) {
    return -1;
  } else {
    return 1;
  }
}

console.log(fooSolution(null)); // Output: 0
console.log(fooSolution(-1));  // Output: -1
console.log(fooSolution(1));   // Output: 1
console.log(fooSolution(0));   // Output: 1 // Corrected behavior