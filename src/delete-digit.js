const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
      let num = [];
    for (i = 0; i < String(n).length; i++) {
      num.push(String(n).replace(new RegExp(String(n)[i]), ''))
    }
    return Math.max(...num)
}

module.exports = {
  deleteDigit
};
