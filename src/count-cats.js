const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix===[]||matrix==="") {
    return 0;
  } else {
    return matrix.flat().reduce((acc,elem)=> elem==='^^'?+(acc+1):acc, [0]);
  }
}
