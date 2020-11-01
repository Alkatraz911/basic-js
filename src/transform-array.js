const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arr1 = [];
  if (Array.isArray(arr) !== true) {
    throw CustomError ('Error, input is not an Array!');
  } else {
       arr.map((el,i) => {
      if (el !== '--discard-next'&& el !== '--discard-prev' &&
          el !== '--double-next' && el !== '--double-prev' && arr[i-1] !== '--discard-next') {
            arr1.push(el);
       } 

        else if (el === '--discard-prev' && i !==0 && arr[i-2] !== '--discard-next') {
         arr1.pop()
       } 
        else if (el === '--double-next'&& i !==arr.length-1 ){
         arr1.push(arr[i+1]);
        } 
        else if (el === '--double-prev'&& i !==0 && arr[i-2] !== '--discard-next') {
         arr1.push(arr[i-1]);
        } 
    });
  }
  
  return  arr1;
  
}
