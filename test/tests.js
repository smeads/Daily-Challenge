require('babel-register')({
  presets: ['es2015'],
});

const expect = require('expect');

// test for sum-all-range
describe('sumAll', () => {
  it ('should return the sum of the range of input array', () => {
    const sumAll = require ('../challenges/sum-all-range');

    expect(sumAll([1, 4]).to.equal(Number));
    expect(sumAll([1, 4]).to.equal(10));
    expect(sumAll([4, 1]).to.equal(10));
    expect(sumAll([5, 10]).to.equal(45));
    expect(sumAll([10, 5]).to.equal(45));
  })
});

// Test for linked-list-cycles
describe('linkedListCycles', () => {
  it ('should return true if the linked list has a cyclical reference', () => {
    const linkedListCycles = require ('../challenges/linked-list-cycles');
  })
});

// Test for first-duplicate
describe('firstDuplicate', () => {
  it ('should return the first duplicate number.', () => {
    const firstDuplicate = require ('../challenges/first-duplicate');
  })
});

// Test for reverse-in-place
describe('reverseInPlace', () => {
  it ('should reverse an array in place', () => {
    const reverseInPlace = require ('../challenges/reverse-in-place');
  })
});

// Test for unique-number
describe('uniqueNumber', () => {
  it ('should print input array to the console', () => {
    const uniqueNumber = require ('../challenges/unique-number');

    expect(uniqueNumber([1, 4]).toEqual(console.log([1, 4])));
  })
});
