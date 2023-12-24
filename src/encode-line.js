const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  let res = ''
  for (let i = 0; i < str.split('').length; i++) {
      if (str.split('')[i] === str.split('')[i+1]) {
          count += 1;
      } else {
          count +=1;
          (count > 1) ? res = res + count + str.split('')[i] : res = res + str.split('')[i];
          count = 0;
      }
  }
return res
}

module.exports = {
  encodeLine
};
