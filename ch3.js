// chapter 3

// There’s no performance benefit in using recursion

// every recursive function has two parts:
// the base case, and the recursive case. The recursive case is when the function calls
// itself. The base case is when the function doesn’t call itself again

// Ex:
const countDown = (number) => {
  console.log(number);
  if (number <= 0) {
    // base case
    return;
  } else {
    // recursive case
    countDown(number - 1);
  }
};

const factorial = (number) => {
  if (number >= 1) {
    return number * factorial(number - 1); // recursive case
  } else {
    return 1; // base case
  }
};

countDown(5);
console.log("---------------------");
console.log(factorial(3));

// Recap
// • Recursion is when a function calls itself.
// • Every recursive function has two cases: the base case
// and the recursive case.
// • A stack has two operations: push and pop.
// • All function calls go onto the call stack.
// • The call stack can get very large, which takes up a lot of memory.
