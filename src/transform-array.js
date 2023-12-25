const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let transform = arr.slice();
    let sqc = ['--double-next', '--double-prev', '--discard-next', '--discard-prev']
    // цикл
    for (i = 0; i < transform.length; i++) {
      if (transform[i] === '--double-next' && i !== transform.length - 1) {
        if (!sqc.includes(transform[i + 1])) {
          transform.splice(i + 1, 0, transform[i + 1]); 
        }
      } else if (transform[i] === '--double-prev' && i !== 0) {
        if (!sqc.includes(transform[i - 1])) {
          transform.splice(i + 1, 0, transform[i - 1]); 
        }      
      } else if (transform[i] === '--discard-next' && i !== transform.length - 1) {
        if (!sqc.includes(transform[i + 1])) {
          transform.splice(i + 1, 1); 
        }
      } else if (transform[i] === '--discard-prev' && i !== 0) {
        if (!sqc.includes(transform[i - 1])) {
          transform.splice(i - 1, 1); 
        }
      }
    }

    // 'arr' parameter must be an instance of the Array!

    let sum = [];
    transform.forEach((item) => {
      if (!sqc.includes(item)) {
        sum.push(item)
      }
    })
    return sum
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  
}

module.exports = {
  transform
};
