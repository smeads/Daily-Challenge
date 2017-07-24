require('babel-register')({
  presets: ['es2015'],
});

const expect = require('expect');
const challenges = require ('../challenges');

// test for sumAllRange
describe('sumAll', () => {
  it ('should return the sum of the range of input array', () => {
    const sumAll = challenges.sumAllRange;

    expect(sumAll([1, 4]).toEqual(Number));
    expect(sumAll([1, 4]).toEqual(10));
    expect(sumAll([4, 1]).toEqual(10));
    expect(sumAll([5, 10]).toEqual(10));
    expect(sumAll([10, 5]).toEqual(10));
  })
});
