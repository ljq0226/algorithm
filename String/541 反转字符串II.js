/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let len = s.length
  let arr = s.split('')
  for (let i = 0; i < len; i += 2 * k) {
    let l = i;
    let r = (i+k-1)>len-1?len-1:i+k-1
    while(l<=r){
      [arr[l],arr[r]] = [arr[r],arr[l]]
      l++;
      r--;
    }
  }
  return arr.join('')

};


