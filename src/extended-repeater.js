const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes, separator = '+',addition = '', additionRepeatTimes = 0, additionSeparator = '|' }) {


  if (typeof(str)!=="string") {
    str = String(str);
  }
  
  
  if (typeof(addition !== "string")) {
   addition = String(addition)
  }
  
  let substr = [];
  if (repeatTimes === undefined) {
    for (let i=0; i<=additionRepeatTimes; i++) {
      substr.push(addition);
    }
    repeatTimes = 0;
  } else {
    for (let i=0; i<additionRepeatTimes; i++) {
      substr.push(addition);
    }  
  }
 
  
  substr = (additionRepeatTimes === 0) ? substr : substr.join(additionSeparator);
  
  if (repeatTimes === 0) {
    return str + substr;
  } else {
    let result = [];
    for (let j=0; j<repeatTimes; j++) {
      result.push(str+substr);
    }
     return result.join(separator);
  }
  
  };
