const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] instanceof Array){
        let depth2 = this.calculateDepth(arr[i])
        if(depth2 > depth){
          depth = depth2
        }
      }
    }
    return 1 + depth
  }
}

module.exports = {
  DepthCalculator
};
