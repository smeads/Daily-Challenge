/*
Write a function that takes in an array of two numbers. Return the sum of those
two numbers and all numbers between them. The lowest number will not always come first.
*/

// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.

/*
Psuedocode:

Input -> An array of two numbers
Output -> Return sum of two number and all numbers between them

- Sort the input array so it's in accending order
- Iterate through sorted array up to and including value at index one
- Each iteration add value of i to result variable.
- Return result
*/

/*
function sumAll(array) {
  if (array.length < 2) return "Not a valid input";

  let result = 0;
  let sortedArr = array.sort((a, b) => {
    return a - b;
  });

  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    result += i;
  }
  return result;
}
*/

// Refactor using Math.max(), Math.min(), and Array.reduce()
function sumAll(array) {
  let list = [];

  let min = Math.min(...array);
  let max = Math.max(...array);

  for (let i = min; i <= max; i++) {
    list.push(i);
  }

  return list.reduce((acc, curr) => {
    return acc += curr;
  });
}

// sumAll([1, 4]) should return a number.
console.log(sumAll([1, 4])); // should return 10.
console.log(sumAll([4, 1])); // should return 10.
console.log(sumAll([5, 10])); // should return 45.
console.log(sumAll([10, 5])); // should return 45.

module.exports = sumAll;
