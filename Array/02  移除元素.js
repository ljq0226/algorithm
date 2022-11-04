
// 数组的内存的分布


//库函数的使用

const clean = (str) => {
  let slow = 1;
  for (let fast = 1; fast < str.length; fast++) {
    if (str[fast] != '#') {
      str[slow] = str[fast]
      slow++
    } else {
      slow--
    }
  }
  return str.slice(0, slow)
}



console.log(clean('abc#def'))
