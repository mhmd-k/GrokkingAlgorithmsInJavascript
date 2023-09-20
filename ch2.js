// chapter 2

// big O notation for binary search: O(log(n))
// the array must be sorted in binary search
const binarySearch = (arr, element) => {
  let high = arr.length - 1;
  let low = 0;
  while (low <= high) {
    let mid = Math.ceil((high + low) / 2);
    let guess = arr[mid];
    if (guess === element) return `element ${element} found at index ${mid}`;
    else if (element > guess) low = mid + 1;
    else high = mid - 1;
  }
  return `element not found`;
};

// Ex:
const arr = [1, 2, 3, 4, 5, 6, 7, 80, 90, 100, 54, 222, 900];
const element = 54;
console.log(binarySearch(arr, element));

// big O notation for selection sort: O(n^2)
const findSmallest = (arr) => {
  let smallest = arr[0];
  let index = 0;
  arr.forEach((e, i) => {
    if (e < smallest) {
      smallest = e;
      index = i;
    }
  });
  return index;
};

const findBiggest = (arr) => {
  let biggest = arr[0];
  let index = 0;
  arr.forEach((e, i) => {
    if (e > biggest) {
      biggest = e;
      index = i;
    }
  });
  return index;
};

const selectionSort = (arr, direction) => {
  let newArr = [];
  let l = arr.length;
  if (direction === "incremental") {
    for (let i = 0; i < l; i++) {
      let smallestIndex = findSmallest(arr);
      newArr.push(arr[smallestIndex]);
      arr.splice(smallestIndex, 1);
    }
  } else if (direction === "decremental") {
    for (let i = 0; i < l; i++) {
      let biggestIndex = findBiggest(arr);
      newArr.push(arr[biggestIndex]);
      arr.splice(biggestIndex, 1);
    }
  } else {
    console.log("direction must be increment or decrement");
    return;
  }
  return newArr;
};

// Ex:
const arr2 = [-3, 0, -7, 8, 3, 90, 44, 6];
console.log(selectionSort(arr2, "decremental"));

// Recap
// • Your computer’s memory is like a giant set of drawers.
// • When you want to store multiple elements, use an array or a list.
// • With an array, all your elements are stored right next to each other.
// • With a list, elements are strewn all over, and one element stores
//   the address of the next one.
// • Arrays allow fast reads.
// • Linked lists allow fast inserts and deletes.
// • All elements in the array should be the same type (all ints,
//   all doubles, and so on). "looks like the author dosen't know javascript :)"
