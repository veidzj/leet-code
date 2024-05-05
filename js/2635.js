/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function(arr, fn) {
  const outputArray = []

  for (let i = 0; i < arr.length; i++) {
    outputArray.push(fn(arr[i], i))    
  }

  return outputArray
}

console.log(map([1, 2, 3], function plusone(n) { return n + 1 }))
