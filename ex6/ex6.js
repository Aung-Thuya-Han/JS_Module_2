'use strict'

function rollDiceTill6() {
  return Math.floor(Math.random() * 6) + 1
}

let roll;

do {
  roll = rollDiceTill6()
  if (roll === 6) {
    alert("The 6 has been rolled!")
    document.getElementById('result').innerHTML += "<li>" + roll + "</li>"
    break
  }

  document.getElementById('result').innerHTML += "<li>" + roll + "</li>"
} while (roll != 6);