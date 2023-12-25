const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length
  },
  addLink(value) {
    this.chainArr.push((value !== undefined) ? `( ${String(value)} )` : '( )')
      return this
  },
  removeLink(position) {
    if (Number.isInteger(position) && (position - 1 >= 0) && (position - 1 < this.chainArr.length)) {
      this.chainArr.splice(position - 1, 1)
      return this
  } else {
    this.chainArr = [];
    throw new Error ("You can\'t remove incorrect link!")
  }
  },
  reverseChain() {
    this.chainArr.reverse()
      return this
  },
  finishChain() {
    let chainstr = this.chainArr.join('~~');
      this.chainArr = [];
      return chainstr;
  }
};

module.exports = {
  chainMaker
};
