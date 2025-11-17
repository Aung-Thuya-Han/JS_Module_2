'use strict'

const numOfPlayer = Number(prompt("Enter number of participants: "))
const participants = []

for (let i = 1; i <= numOfPlayer; i++) {
  const playerName = prompt("Enter participant's name: ")
  participants.push(playerName)
}

for (let i = 0 ; i < participants.length; i++) {
  console.log(participants[i])
  document.getElementById("target").innerHTML += "<li>" + String(participants[i]) + "</li>"

}

