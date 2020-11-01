const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr:[],
  getLength() {
    return this.arr.length;
  },
  addLink(val) {
    this.arr.push(`( ${val} )`);
    return this;
  },
  removeLink(pos) {
    if ( typeof pos === 'number' && pos > 0 && pos <= this.arr.length) {
      this.arr.splice(pos - 1, 1);
      return this;
  } else {
      this.arr= [];
      throw new Error();
  }
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
