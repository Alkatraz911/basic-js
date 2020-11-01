const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  const MODERN_ACTIVITY= 15; 
  const HALF_LIFE_PERIOD= 5730;
   
  if (typeof(sampleActivity)==='string'&&/[0-9]/.test(sampleActivity)===true&& Number(sampleActivity)>=1&&Number(sampleActivity)<=15) {
    return Math.ceil(HALF_LIFE_PERIOD*Math.log10(MODERN_ACTIVITY/sampleActivity)/Math.log10(2))
  } else 
    return false;
  }
