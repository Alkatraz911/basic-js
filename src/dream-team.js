const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members))
       return false;
  
  
  for (var i = 0; i<members.length; i++) {
    if (typeof(members[i])!== "string") { 
       members[i] = '';
    } 
  }
  members = members.map((el,index)=>String(el).trim());
  
  let regexp = /^\w/;
  
  for (var j = 0; j<members.length; j++) {    
     members[j] = regexp.exec(String(members[j]));
    }
  return    members.flat().join().toUpperCase().split('').sort().join().replace(/,/g,'');
}
