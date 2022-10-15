const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
      return matrix.flat().filter(cat => cat === '^^').length;
}


module.exports = {
  countCats
};
