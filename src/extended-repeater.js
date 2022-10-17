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
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;
  if (typeof(str) != String){
    str = String(str);
  }
  if (typeof(addition) != String){
    addition = String(addition);
  }
  let arr = [];
  let arrAdition = [];
  for (let i = 0; i < additionRepeatTimes; i++){
    arrAdition.push(addition);
  }
  arrAdition = arrAdition.join(additionSeparator);
  for (let j =0; j < repeatTimes; j++){
    arr.push(str);
    arr[j] = arr[j] + arrAdition;
  }
  return arr.join(separator);
}

module.exports = {
  repeater
};
