// You have a function rand7() that generates a random integer from 1 to 7.
// Use it to write a function rand5() that generates a random integer from 1 to 5.
// rand7() returns each integer with equal probability. rand5() must also return
// each integer with equal probability.

// Solution One
// Simply "re-roll" whenever we get a number greater than 5.
function rand5() {
  var result = 7; // arbitrarily large
  while (result > 5) {
      result = rand7();
  }
  return result;
}

// Solution Two (Recursion)
// Worst-case O(\infty)O(∞) time (we might keep re-rolling forever) and O(1)O(1) space.
function rand5() {
  var roll = rand7();
  return roll <= 5 ? roll : rand5();
}
