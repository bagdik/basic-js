const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(item => {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === '^^') {
        count++;
      }
    }
  });
  return count;
};
