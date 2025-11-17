'use strict'

const numbers = []

while (true) {
  const userNum = Number(prompt('Enter a number: '))
  if (userNum === 0) {
    break
  }
  numbers.push(userNum)
}

numbers.sort((a,b) => b - a)

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}