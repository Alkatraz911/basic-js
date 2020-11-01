const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr,arrNumber=[],counter=1) {
    arrNumber.push(counter);
    arr.forEach((el) => {
    if (Array.isArray(el)) {
        this.calculateDepth(el,arrNumber,counter+1);
    } 
    });
    
    return Math.max(...arrNumber);
  }
};