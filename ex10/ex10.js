'use strict'

const numOfPeople = Number(prompt("Enter how many people:"))
const peopleList = []

for (let i = 1; i <= numOfPeople; i++) {
  const candidateName = prompt("Enter name for candidate " + String(i))
  peopleList.push({name: candidateName, votes: 0})

}

const numOfVoter = Number(prompt("Enter number of voters:"))

for (let i = 1; i <= numOfVoter; i++) {
  const vote = prompt(`Voter ${i}, vote a person`)
  for (let j = 0; j < numOfPeople; j++ ){
    if (peopleList[j].name === vote) {
      peopleList[j].votes += 1
    } else if (vote === "") {
      peopleList[j].votes += 0
    }
  }
}

peopleList.sort((a,b) => b - a)
const winner = peopleList[0]

document.getElementById('winner').innerHTML = "The winner is " + peopleList[0].name + " with  " + peopleList[0].votes + " votes."
document.getElementById('result').innerHTML = "results:" + "<br/>"
for (let i = 0; i < numOfPeople; i++) {
  document.getElementById('person').innerHTML += peopleList[i].name + ": " + peopleList[i].votes + " votes" + "</br>"
}



