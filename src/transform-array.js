const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * --discard-nextисключает следующий элемент массива из преобразованного массива.
--discard-prevисключает предыдущий элемент массива из преобразованного массива.
--double-nextдублирует следующий элемент массива в преобразованном массиве.
--double-prevдублирует предыдущий элемент массива в преобразованном массиве.

 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = [];
  if (Array.isArray(arr) === false){
      throw new Error("'arr' parameter must be an instance of the Array!");
  }
  for (let j = 0; j < arr.length; j++){
    result.push(arr[j]);
  }
    for (let i= 0; i < arr.length; i++){
      if(result[i] === '--discard-next' && i != result.length - 1){
        result = arr.splice(i, 2);
        return result;
      }
        else if (result[i] === '--discard-next' && i === result.length - 1){
          result.splice(i, 1);
          return result;
      }
      if(result[i] === '--discard-prev' && i != 0){
        result.splice(i - 1, 2);
        return result;
      }
      else if (result[i] === '--discard-prev' && i === 0){
        result.splice(i, 1);
        return result;
      }
      if(result[i] === '--double-next' && i != result.length - 1){
        result.splice(i, 1, result[i + 1]);
        return result;
      }
      else if(result[i] === '--double-next' && i === result.length - 1){
        result.splice(i, 1);
        return result;
      }
      if(result[i] === '--double-prev' && i != 0){
        result.splice(i, 1, result[i -1]);
        return result;
      }
      else if(result[i] === '--double-prev' && i === 0){
        result.splice(i, 1);
        return result;
      }
    }
  }

module.exports = {
  transform
};
