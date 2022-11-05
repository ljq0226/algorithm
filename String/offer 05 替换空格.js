/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  // return s.split('').map((item) => item == ' ' ? '%20' : item).join('')
  return s.split('').join('%20')
};

