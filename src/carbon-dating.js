const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  let result = false;
  if (!isNaN(parseInt(sampleActivity)) 
      && typeof(sampleActivity) === 'string'
      && parseFloat(sampleActivity) <= MODERN_ACTIVITY 
      && parseFloat(sampleActivity) > 0 ) {
    result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  }
  return result;
};
