/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function(num) {
  let steps = 0

  while (num != 0) {
    if (num % 2 == 0) {
      num /= 2
      steps++
    }
    if (num % 2 == 1) {
      num -= 1
      steps++
    }
  }
  
  return steps
}

console.log(numberOfSteps(8))
