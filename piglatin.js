/**
 * Read the first letter of the word
 * Remove the first letter of the word
 * Add that letter to the end of the word
 * Add ay to the end of the word
 * wh wr th ch sh ph kn
 * check first two letters of the word
 */
let words = [
    "write",
    "banana",
    "apple",
    "Apple",
    "what",
    "that",
    "chain",
    "shark",
    "philanthropy",
    "Philanthropy",
    "known",
    "a",
    "the",
    "at",
    "is"
    
]
// words.forEach(word => {
//     console.log(getPiglatin(word))
// })



let sentence = "I love the way mangos look."
sentence = sentence.split(" ")
let newSentence = sentence.map(word => {
    return getPiglatin(word)
})
console.log(newSentence.join(" "))
// sentence.forEach(word => {
//     newSentence.push(getPiglatin(word))
    
// });
// console.log(newSentence.join(" "))

function getPiglatin(inputWord) {
    //if the statement is true the rest of the code won't run
    //if the word is just an "a" we don't need to check anything, just send back "ay"
    if (inputWord.toLowerCase() === "a") {
        return inputWord + "y"
    }

    let vowels = ["a", "e", "i", "o", "u"]
    let consonantSounds = ["wh", "wr", "th", "ch", "sh", "ph", "kn"]
    let firstLetter = inputWord[0]
    let firstLetterIsCapitalized = firstLetter === firstLetter.toUpperCase()
    let firstTwoLetters = inputWord.slice(0, 2)
    //if the first letter isn't a vowel then we need to remove it and add it to the end of the word.
    if (consonantSounds.includes(firstTwoLetters.toLowerCase())) {
        inputWord = inputWord.slice(2)
        inputWord += firstTwoLetters
    } else if (!vowels.includes(firstLetter.toLowerCase())) {
        inputWord = inputWord.slice(1)
        inputWord += firstLetter

    }
    if (firstLetterIsCapitalized) {
        inputWord = inputWord.toLowerCase()
        inputWord = inputWord[0].toUpperCase() + inputWord.slice(1)

    }
    inputWord += "ay"
    return inputWord


}