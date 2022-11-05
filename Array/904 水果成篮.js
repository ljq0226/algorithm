/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let res = -1;
  let len = fruits.length - 1
  let p1 = fruits[0]
  let p2
  let k = 0
  for (let i = 0; i <= len; i++) {
    if (fruits[i] != p1 && fruits[i] != p2 && p2) {
      p1 = fruits[i - 1]
      p2 = fruits[i]
      res = Math.max(res, k)
      console.log(k)
      k = 2
      continue;
    }

    if (fruits[i] != p1 && !p2) {
      p2 = fruits[i];


      k++;
    }
    res = Math.max(res, k)
    return res

  };
}
// let fruits = [1, 1, 2, 1, 4, 3, 2, 1, 1, 2]
let fruits = [1, 1, 2]

totalFruit(fruits)
