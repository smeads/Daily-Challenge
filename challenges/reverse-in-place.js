'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

let array = ['a', 'b', 'c', 'd', 'e'];

// Temporary swap by half solution
// initialize left and right variables setting them eqaul to null
// initialize a length variable set equal to input array.length
// use a for loop to iterate through the array and swap left and right elements of the array
// each iteration initialize a variable temp to hold the array[left] elements value
function reverseInPlace(array) {
  if (!Array.isArray(array)) return 'invalid input';

  let left = null;
  let right = null;
  const length = array.length;

  for (left = 0; left < length / 2; left += 1) {
    right = length - 1 - left;
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }
  return array;
}

// Push and Splice solution
// loop through the input array
// set i equal to array.length - 2 (second to the last element in the array)
// loop until iterator (i) is greater than or equal to 0
// each iteration decrement i by one
// each iteration push array[i] on to input array
// each iteration splice element at index i
// return array

// Splice is actually going to run 0(n) || linear time making this solution O(n^2) || quadratic time
function reverseInPlace(array) {
  if (!Array.isArray(array)) return 'invalid input';

  for (let i = array.length - 2; i >= 0; i -= 1) {
    array.push(array[i]);
    array.splice(i, 1);
  }
  return array;
}

// Array destructuring solution
// On the surface it looks great, but in fact under the hood it is not reversing in place.
// another array is created in memory
function reverseInPlace(array) {
  if (!Array.isArray(array)) return 'invalid input';

  for (let i = 0; i < array.length / 2; i += 1) {
    [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
  }

  return array;
}

console.log(reverseInPlace(array));
