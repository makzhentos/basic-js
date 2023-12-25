const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sum = [];
  arr.forEach(item => {
      if (item !== -1) {
          sum.push(item)
      } 
  });
  sum = sum.sort((a, b) => {
    return a - b
});
  arr.forEach((item, index)=> {
      if (item === -1) {
          sum.splice(index, 0, -1)
      }
  })
  return sum
}

module.exports = {
  sortByHeight
};
