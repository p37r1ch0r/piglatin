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
let words = [
    // "write",
    // "banana",
    // "apple",
    // "Apple",
    // "what",
    // "that",
    // "chain",
    // "shark",
    // "philanthropy",
    // "Philanthropy",
    // "known",
    // "a",
    // "the",
    // "at",
    // "is",
    "marshmallow."

]
words.forEach(word => {
    console.log(getPiglatin(word))
})



// let sentence = "I love the way mangos look."
// let splitWords = sentence.split(" ")
// //v declaring an empty array to create a new array of translated words
// let newSentence = []
// splitWords.forEach(word => {
//     newSentence.push(getPiglatin(word))
// })
// console.log(newSentence.join(" "))

// function getPiglatinSentence(inputSentence) {
//     let splitWords = inputSentence.split(" ")
//     let newSentence = []
//     splitWords.forEach(word => {
//         newSentence.push(getPiglatin(word))
//     })
//     return newSentence.join(" ")
// }
// console.log(getPiglatinSentence("Follow the monkey man."))





// sentence.forEach(word => {
//     newSentence.push(getPiglatin(word))

// });
// console.log(newSentence.join(" "))

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
    let punctuation = [".",",","!","?"]
    let vowels = ["a", "e", "i", "o", "u"]
    let consonantSounds = ["wh", "wr", "th", "ch", "sh", "ph", "kn"]
    let firstLetter = inputWord[0]
    let firstLetterIsCapitalized = firstLetter === firstLetter.toUpperCase()
    let firstTwoLetters = inputWord.slice(0, 2)
    let lastLetter = inputWord.slice(-1)
    

    if (punctuation.includes(lastLetter)) {
        slice(lastLetter)
        console.log(inputWord.slice(-1))
        
    }
    // console.log("amazing!",punctuation.includes(lastLetter))
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
    return inputWord
    
    


}