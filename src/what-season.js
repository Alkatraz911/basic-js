const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if(typeof(date) === 'undefined') {
    return 'Unable to determine the time of year!';
  }
  
  if(Object.prototype.toString.call(date) !== '[object Date]')  
    throw new Error('THROWN');
  let datechk = date.getMonth();

  if(datechk == 11||datechk <= 1) {
    return 'winter';
  }

  if(datechk <= 4) {
    return 'spring';
  }

  if(datechk <= 7) {
    return 'summer';
  }

  if(datechk <= 10) {
    return 'fall';
  }


};
