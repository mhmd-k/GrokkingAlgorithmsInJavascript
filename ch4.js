// Divide & conquer (D&Q)
// here’s how D&C works:
// 1. Figure out a simple case as the base case.
// 2. Figure out how to reduce your problem and get to the base case.

// D&C isn’t a simple algorithm that you can apply to a problem. Instead,
// it’s a way to think about a problem.

// Ex: recursive function to sum the element of an arr
const arr = [1, 2, 3, 4, 5];

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.pop() + sum(arr);
}

console.log(sum(arr));

// Ex: recursive function to calculate the number of items in a list(arr) == arr.length
function calcLength(list) {
  if (+list === 0) {
    return 0;
  }
  list.pop();
  return 1 + calcLength(list);
}

const itemsList = [
  { id: 0, name: "a" },
  { id: 1, name: "b" },
  { id: 2, name: "c" },
  { id: 3, name: "d" },
  { id: 4, name: "e" },
];

console.log(calcLength(itemsList));

// Ex: find the maximum number in a list
function maximum(arr, number) {
  if (arr.length === 0) {
    return number; //base case
  }
  // recursive case
  let lastEle = arr.pop();
  if (number < lastEle) {
    number = lastEle;
  }
  return maximum(arr, number);
}

const a = [10000, 200, 3, 4, 9];

console.log(maximum(a, 0));

// base case for binary search: array has one element
// recursive case for binary search: split the array in half,
// throw away one half, and call binary search on the other half.

// Quick sort
// Quicksort is a sorting algorithm. It’s much faster than selection sort
// and is frequently used in real life. Quicksort also uses D&C.

function quickSort(arr = []) {
  // base case
  if (arr.length < 2) return arr;

  // Recursive case
  const middle = Math.floor(arr.length / 2);
  const pivot = arr[middle];
  arr.splice(middle, 1);
  // Sub-array of all the elements less than the pivot
  const lessArr = arr.filter((e) => e <= pivot);
  // Sub-array of all the elements greater than the pivot
  const greaterArr = arr.filter((e) => e > pivot);
  return [...quickSort(lessArr), pivot, ...quickSort(greaterArr)];
}

const qArr = [3, 7, 3, 12, 5, 4, 8, 1, -2, -90, -4, 0, 87, 62];
console.log(quickSort(qArr));

// Inductive proofs: are one way to prove that your algorithm works.

// Quicksort is a tricky case. In the worst case, quicksort takes O(n2) time.
// It’s as slow as selection sort! But that’s the worst case. In the average
// case, quicksort takes O(n log n) time.

// When you write Big O notation like O(n), it really means this: c * n
// c: is some fixed amount of time that your algorithm takes. It’s called the constant.
// You usually ignore that constant, because if two algorithms have different Big O times,
// the constant doesn’t matter.

// Average case vs. worst case
// The performance of quicksort heavily depends on the pivot you choose.
// Suppose you always choose the first element as the pivot. And you
// call quicksort with an array that is already sorted. Quicksort doesn’t
// check to see whether the input array is already sorted. So it will still try
// to sort it.
// this is the worst-case scenario.
// in this case big O notation is: O(n^2)
// Now instead, suppose you always picked the middle element as the pivot.
// this is the avarage case scenario.
// in this case big O notation is: O(n*log(n))

// Recap
// • D&C works by breaking a problem down into smaller and smaller
// pieces. If you’re using D&C on a list, the base case is probably an
// empty array or an array with one element.
// • If you’re implementing quicksort, choose a random element as the
// pivot. The average runtime of quicksort is O(n log n)!
// • The constant in Big O notation can matter sometimes. That’s why
// quicksort is faster than merge sort.
// • The constant almost never matters for simple search versus binary
// search, because O(log n) is so much faster than O(n) when your list
// gets big.
