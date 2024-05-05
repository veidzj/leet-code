/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function(arr, fn) {
  const outputArray = []

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      outputArray.push(arr[i])    
    }
  }

  return outputArray
}

console.log(filter([0,10,20,30], function greaterThan10(n) { return n > 10 }))
