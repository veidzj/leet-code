/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function(init) {
  let counter = init

  return {
    increment() {
      counter++
      return counter
    },
    reset() {
      counter = init
      return counter
    },
    decrement() {
      counter--
      return counter
    }
  }
}

const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
