/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.trim().split(' ').reverse()
  arr.unshift('')
  return Array.from(new Set(arr)).join(' ').trim()

};
