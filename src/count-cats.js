const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
      matrix.flat().filter(cat => cat === '^^').length;
}


module.exports = {
  countCats
};
