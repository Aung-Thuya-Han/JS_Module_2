'use strict'

const numbers = []
for (let i = 0; i <= 4; i++) {
  const userInput = prompt('Enter a number: ')
  numbers.push(Number(userInput))
}

for (let i = numbers.length-1; i >= 0; i--) {
  console.log(numbers[i])
}