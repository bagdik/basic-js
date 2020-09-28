const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true){
    this.direction = direction;
    this.letters = this.fillLetters();
  }
  fillLetters() {
    let letters = [];
    for(let i = 65; i <= 90; i++){
      letters.push(String.fromCodePoint(i));
    }
    return letters;
  }
  getIndexLetter(letter){
    return this.letters.indexOf(letter);
  }
  extensionKey(message, key){
    let j = 0;
    let newKey = '';

    for(let i = 0; i < message.length; i++){
      if(this.letters.includes(message[i])){
        newKey += key[j];
        j++; 
      } else {
        newKey += '#';
      }
      if(j >= key.length){
        j = 0;
      } 
    }
    
    return newKey; 
  }
  encrypt(message, key) {
    let cipher = '';
    let newMessage = message.toUpperCase();
    let newKey = this.extensionKey(newMessage, key).toUpperCase();

    for(let i = 0; i < message.length; i++){
      if(this.letters.includes(newMessage[i])){
        cipher += this.letters[(this.getIndexLetter(newMessage[i]) 
                                + this.getIndexLetter(newKey[i])) % 26];
      } else {
        cipher += message[i];
      }
    }

    return this.direction ? cipher : cipher.split('').reverse().join('');
  }   

  decrypt(message, key) {
      let cipher = '';
      let newMessage = message.toUpperCase();
      let newKey = this.extensionKey(newMessage, key).toUpperCase();
  
      for(let i = 0; i < message.length; i++){
        if(this.letters.includes(newMessage[i])){
          cipher += this.letters[(this.getIndexLetter(newMessage[i]) 
                                  - this.getIndexLetter(newKey[i]) + 26) % 26];
        } else {
          cipher += message[i];
        }
      }
  
      return this.direction ? cipher : cipher.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
