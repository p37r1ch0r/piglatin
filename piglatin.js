/**
 * Read the first letter of the word
 * Remove the first letter of the word
 * Add that letter to the end of the word
 * Add ay to the end of the word
 * wh wr th ch sh ph kn
 * check first two letters of the word
 * order of operations goes inside out, and assignment goes right to left
 * assignment is storing a valuable in a variable.
 *
 */

// let args = process.argv
// let inputSentence = args[2]

const sentenceInput = document.getElementById("sentence-input");
const submitButton = document.getElementById("submit-button")
const alertContainer = document.getElementById("alert-container")
// const output = document.getElementById("output")
// const translationHeader = document.getElementById("translation-header")

sentenceInput.value = "Someday we'll all be pumpkins."
// output.innerText = "This is definitely piglatin!"

submitButton.onclick = () => {
    // console.log(getPiglatinSentence(sentenceInput.value))
    // output.innerText = getPiglatinSentence(sentenceInput.value)
    // translationHeader.innerText = "Translation Complete"

    // Create a new html element
    const newElement = document.createElement('div');
    // Set the text of the element
    newElement.innerText = getPiglatinSentence(sentenceInput.value)
    // Add the class name
    newElement.setAttribute('class', 'alert alert-info spooky-alert')
    // Add the role attribute
    newElement.setAttribute('role', 'alert')

    alertContainer.appendChild(newElement);    






    
}














function getPiglatinSentence(inputSentence) {
    let splitWords = inputSentence.split(" ")
    let newSentence = []
    splitWords.forEach(word => {
        newSentence.push(getPiglatin(word))
    })
    return newSentence.join(" ")
}


/**
 * gives the piglatin version of the word
 * @param {string} inputWord
 */
function getPiglatin(inputWord) {
    //if the statement is true the rest of the code won't run
    //if the word is just an "a" we don't need to check anything, just send back "ay"
    if (inputWord.toLowerCase() === "a") {
        return inputWord + "y"
    }

    let punctuation = [".", ",", "!", "?"]
    let vowels = ["a", "e", "i", "o", "u"]
    let consonantSounds = ["wh", "wr", "th", "ch", "sh", "ph", "kn", "st", "mc"]
    let firstLetter = inputWord[0]
    let firstLetterIsCapitalized = firstLetter === firstLetter.toUpperCase()
    let firstTwoLetters = inputWord.slice(0, 2)
    let lastLetter = inputWord.slice(-1)
    let lastLetterIsPunctuation = punctuation.includes(lastLetter)

    if (lastLetterIsPunctuation) {
        inputWord = inputWord.substring(0, inputWord.length - 1)
    }

    //if the first letter isn't a vowel then we need to remove it and add it to the end of the word.
    if (consonantSounds.includes(firstTwoLetters.toLowerCase())) {
        inputWord = inputWord.slice(2)
        inputWord += firstTwoLetters
    } else if (!vowels.includes(firstLetter.toLowerCase())) {
        inputWord = inputWord.slice(1)
        inputWord += firstLetter
    }

    //Recapitalzing the first letter of the word to make it gramatically correct (assuming it was in the first place).
    if (firstLetterIsCapitalized) {
        inputWord = inputWord.toLowerCase()
        inputWord = inputWord[0].toUpperCase() + inputWord.slice(1)

    }
    inputWord += "ay"
    if (lastLetterIsPunctuation) {
        inputWord += lastLetter
    }
    return inputWord
}