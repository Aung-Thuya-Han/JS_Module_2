'use strict'

const userChoice = Number(prompt("Choose number of sides:"))

function rollDice() {
  return Math.floor(Math.random() * userChoice) + 1
}

let roll;

do {
  roll = rollDice()
  if (roll === userChoice) {
    alert("The number " + userChoice + " has been rolled!")
    document.getElementById('result').innerHTML += "<li>" + roll + "</li>"
    break
  }

  document.getElementById('result').innerHTML += "<li>" + roll + "</li>"
} while (roll != userChoice);