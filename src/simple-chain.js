const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined){
      this.chain.push('( )')
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    
    try{
      if(isNaN(position)){
        throw new Error('The link is wrong');
      }
      this.chain.splice(position - 1, 1);
      return this; 
    } catch(err){
      if(err.name === 'Error'){
        this.chain = [];
        throw err;
      }
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.join('~~');
    this.chain.length = 0;
    return str;
  }
};

module.exports = chainMaker;
