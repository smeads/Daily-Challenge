/*
  Write a function, nextBigger, that accepts a positive integer and returns the next biggest
  integer made from the same digits. If no bigger number is possible, return -1.

  ex: nextBigger(12) = 21
  ex: nextBigger(21) = -1
  ex: nextBigger(1120)

  Input:
    Positive integer

  Output:
    The next biggest integer made from the same digits.
      If bigger number doesn't exist, return -1.

  Psuedo:
    Convert integer into string, then string into an array(strings are immutable)
      Use the toString() and split() split methods

    Iterate through the array from the last index down to the zeroth index
      This will start us with the digit with the smallest consequence

    Each iteration use parseInt() method to convert current index and index
    immediately to the left.
      If index immediately to the left is smaller
        Create temp variable to hold current index's value
        Swap current index's value with value immediately to the left
        Create newString variable set equal to array joined back as a string
        Return the newString as an integer using parseInt

    If no bigger number, return -1


*/

function nextBigger(integer) {

}

console.log(nextBigger(1120));
