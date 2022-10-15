const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if (typeof(date) === 'undefined'){
      return 'Unable to determine the time of year!';
    } 
    if (!(date instanceof Date)) {
      return 'Invalid date!';
    }

  let month = date.getMonth();
  if(month <= 1 || month === 11){
    return 'winter';
  }
  if(1 < month && month <= 4){
    return 'spring';
  }
  if(4 < month && month <= 7){
    return 'summer';
  }
  if(7 < month && month <= 10){
    return 'fall';
  }
}

module.exports = {
  getSeason
};
