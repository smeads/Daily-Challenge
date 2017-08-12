/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

const X = [-1, 0, 0, 4];
const Y = [0, 0, 0, 4];
const R = [1, 3, 6, 0.1];
const START_X = 1;
const START_Y = 0;
const END_X = 4;
const END_Y = 4;

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  return r.reduce((acc, rad, i) => {
    const startDistance = Math.hypot(x[i] - start_x, y[i] - start_y);
    const endDistance = Math.hypot(x[i] - end_x, y[i] - end_y);
    return (startDistance > rad && rad > endDistance) || (startDistance < rad && rad < endDistance) ? ++acc : acc;
  }, 0);
}

console.log(circleCountry(X, Y, R, START_X, START_Y, END_X, END_Y));

module.exports = circleCountry;
