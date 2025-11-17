'use strict'

const numberList = []

while (true) {
  const userNum = Number(prompt("Enter a number: "))
  if (numberList.includes(userNum)) {
    alert(userNum + " is already given.")
    break
  }

  numberList.push(userNum)
}

numberList.sort()

for (let i = 0; i < numberList.length; i++) {
  console.log(numberList[i])
}
