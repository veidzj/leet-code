/**
 * @param {string} val
 * @return {Object}
 */
const expect = function(val) {
  return {
    toBe: (comparisonValue) => {
      if (comparisonValue === val) return true
      throw new Error('Not Equal')
    },
    notToBe: (comparisonValue) => {
      if (comparisonValue !== val) return true
      throw new Error('Equal')
    }
  }
}

console.log(expect(5).toBe(4))
console.log(expect(5).notToBe(5))
