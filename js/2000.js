/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = function(word, ch) {
  const prefixArray = []
  const suffixArray = []
  let reverseIndex = 0
  let wordArray = word.split('')

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] == ch) {
      reverseIndex = i
      break
    }
  }

  for (let i = reverseIndex; i >= 0; i--) {
    prefixArray.push(word[i])
  }

  for (let i = reverseIndex + 1; i < wordArray.length; i++) {
    suffixArray.push(word[i])
  }

  return prefixArray.concat(suffixArray).join('')
}

console.log(reversePrefix('abcd', 'z'))
