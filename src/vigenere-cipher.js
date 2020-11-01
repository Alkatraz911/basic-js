class VigenereCipheringMachine {
  constructor(a = true){
    this.alphabetArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.straight = a;
  }

  codeChar(char){
    return char.charCodeAt(); 
  }

  encrypt(str,key,decr = true) {
    
    if(!str||!key){
      throw new Error();
    }

    str = str.toUpperCase().split('');;
    key = key.toUpperCase().split('');;
    let result = [], strArr =[], keyArr = [];

    for(let i = 0; i<str.length; i++){
      if(!this.alphabetArr.includes(str[i])){
        strArr.push(str[i]);
        continue;
      }
      strArr.push(str[i].charCodeAt())
    }
    for(let i = 0; i<key.length; i++){
      keyArr.push(key[i].charCodeAt())
    }

    let j = 0;

    for(let i = 0; i<strArr.length; i++){
      if(!this.alphabetArr.includes(str[i])){
        result.push(str[i]);
        continue;
      }
      if(decr){
      result.push(this.alphabetArr[((strArr[i]+keyArr[j])%this.alphabetArr.length)]);
      }else{
        result.push(this.alphabetArr[((strArr[i]+this.alphabetArr.length-keyArr[j])%this.alphabetArr.length)]);
      }
      j++;
      if(j>=keyArr.length) 
      j=0;
    }
    



    if(!this.straight) {
      result.reverse();
    }

    return result.join('');
  }    
  decrypt(str,key) {
    return this.encrypt(str,key,false);
  }
}

module.exports = VigenereCipheringMachine;
