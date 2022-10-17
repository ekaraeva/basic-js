const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let str = n.toString();
  let resultArr = [];
  let arr = str.split('').map(Number);
  for (let i = 0; i < arr.length; i++){
      let newArr = arr.slice();
      newArr.splice(i, 1);
      resultArr.push(+newArr.join(''));
  }
    return Math.max(...resultArr);
}

module.exports = {
  deleteDigit
};
