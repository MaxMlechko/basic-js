const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
  	let result = this.chain.length
    return result
  },
  addLink(value) {
    if(value == undefined){
      this.chain.push("null")
    }
    else{
      this.chain.push(value)
    }
    return this
  },
  removeLink(position) {
    if(position > (this.chain.length - 1) || position < 1 || isNaN(position)){
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position-1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result = this.chain.join(" )~~( ")
    result = "( " + result + " )"
    this.chain = []
    return result
  }
};

module.exports = {
  chainMaker
};
