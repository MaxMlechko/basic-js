const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr = []
  let addition = ""
  let repeatTimes
  if(options.repeatTimes){
    repeatTimes = options.repeatTimes
  }
  else{
    repeatTimes = 1
  }
  if(options.addition || options.addition === false || options.addition === null){
    let additionArray = []
    if(options.additionRepeatTimes){
      additionRepeatTimes = options.additionRepeatTimes
    }
    else{
      additionRepeatTimes = 1
    }
    for (let j = 0; j < additionRepeatTimes; j++) {
      additionArray.push(String(options.addition))
    }
    if(options.additionSeparator){
      addition = additionArray.join(options.additionSeparator)
    }
    else{
      addition = additionArray.join("|")
    }
  }
  for (let i = 0; i < repeatTimes; i++) {
    arr.push(str + addition)
  }
  if(options.separator){
    return arr.join(options.separator)
  }
  return arr.join("+")
}

module.exports = {
  repeater
};
