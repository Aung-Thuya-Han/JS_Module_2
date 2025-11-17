'use strict'

const namesList = []

for (let i = 1; i <= 6; i++) {
  const dogNames = prompt("Enter a dog's name: ")
  namesList.push(dogNames)
}

namesList.sort()

for (let i = namesList.length - 1; i >= 0; i--) {
  document.getElementById("target").innerHTML += "<li>" + String(namesList[i]) + "</li>"
}