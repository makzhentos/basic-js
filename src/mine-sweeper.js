const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mines = [];
  for (let i = 0; i < matrix.length; i++) {
      mines.push([]);
      for (let j = 0; j < matrix[0].length; j++) {
          let sum = 0;
          for (let k = -1; k < 2; k++) {
              for (let s = -1; s < 2; s++) {
                  if (matrix[i + k] && matrix[i + k][j + s]) {
                      sum += 1;
                  } 
              }
          }
          if (matrix[i][j]) {
              sum -= 1;
          }
          mines[i].push(sum)
      }
  }
  return mines
  
}

module.exports = {
  minesweeper
};
