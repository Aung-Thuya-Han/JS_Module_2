'use strict'

const originalArr = [1,2,3,4,5,6,7,8,9,10]
const newArr = []

function even(originalArr) {
  for (let i = 1; i <= originalArr.length - 1; i++) {
    if (originalArr[i] % 2 === 0) {
      newArr.push(originalArr[i])
    }
  }

  return newArr
}

document.getElementById('original').innerHTML = "The original array is " + originalArr.join(', ')
document.getElementById('new').innerHTML = "The new array is " + even(originalArr).join(', ')
