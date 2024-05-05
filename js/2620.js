/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function(n) {
  let counter = n - 1
  return function() {
    counter++
    return counter
  }
}

const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())
