const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  let separator = options.separator ? options.separator : '+';
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  
  function simpleRepeater(str, times = 0, separator){
    let arr = [];
    for(let i = 0; i < times; i++){
      arr.push(String(str));
    }
    return times === 0 && str ?  str : arr.join(separator);
  }
  
  str += simpleRepeater(options.addition, options.additionRepeatTimes, additionSeparator);
  result = simpleRepeater(str, options.repeatTimes, separator);
  return result;
};
  