function add() {
    // we'll fill this in shortly
  }
function subtract() {
    // we'll fill this in shortly
  }
function multiply() {
    // we'll fill this in shortly
}
function divide() {
    // we'll fill this in shortly
}
function add(a, b) {
    return a + b;
  }
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b
}
// Convert a string to a base 10 integer
function makeInt(string) {
    return parseInt(string, 10);
  }
  
  // Convert a string to a decimal (float)
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  console.log(makeInt("42")); // Output: 42
console.log(preserveDecimal("3.1415927")); // Output: 3.1415927
// Increment a number by 1
function increment(n) {
    return n + 1;
  }
  console.log(increment(5)); // Output: 6
console.log(increment(-10)); // Output: -9
// Decrement a number by 1
function decrement(n) {
    return n - 1;
  }
  console.log(decrement(5)); // Output: 4
console.log(decrement(-10)); // Output: -11
