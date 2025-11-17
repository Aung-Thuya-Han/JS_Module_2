'use strict'

const wordsList = ['Aung', 'Thu', 'Ya', 'Han']

function concat(wordsList) {
  let finalWord = ""
  for (let i = 0; i < wordsList.length; i++) {
    finalWord += wordsList[i]
  }

  return finalWord
}


document.getElementById("target").innerHTML = concat(wordsList)