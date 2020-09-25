const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = null;
  try{
    if(!Array.isArray(arr)){
      throw new Error('The argument is not an Array'); 
    } else if (arr.length === 0) {
      result = [];
    } else {
      result = arr.slice();
    }
    arr.forEach((element, index) => {
      if(element === '--discard-next'){
        if(index === arr.length - 1){
          result.splice(index, 1);
        } else {
          result.splice(index, 2);
        }
      } else if (element === '--discard-prev'){
        if (index === 0){
          result.splice(0, 1);
        } else {
          if (arr.length === result.length){
            result.splice(index - 1, 2);
          } else {
            result.splice(index - 2, 1);
          }
        }
      } else if(element === '--double-next'){
        if(index === arr.length - 1){
          result.splice(index, 1);
        } else {
          result.splice(index, 1, arr[index + 1]);
        }
      } else if (element === '--double-prev') {
        if (index === 0){
          result.splice(0, 1);
        } else if(arr.length === result.length){
          result.splice(index, 1, arr[index - 1]);
        } else {
          result.splice(index - 2, 1);
        }
      } 
    });
  } catch(err) {
    if (err.name === 'Error') {
      result = 'THROWN';
      throw err;
    }
  }
return result;
};
