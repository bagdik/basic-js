const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = [];
  if (!Array.isArray(members)) return false;
  members.forEach(member => {
    if (typeof(member) === 'string') {
      teamName.push(member.trim()[0].toUpperCase());
    }
  });
  return teamName.sort((a, b) => {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }).join('');
};
