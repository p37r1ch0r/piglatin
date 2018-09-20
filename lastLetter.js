let clothes = [
    "shirt",
    "pants",
    "underwear",
    "socks",
    "hat"
]
let statement = "I have a "
clothes.forEach(clothing => {
    if (clothing === "underwear") {
    console.log("eww")
    } 
    if (clothing.length%3 === 0) {
        console.log("holy trinity")
    }
    console.log(statement + clothing)
    console.log(clothing.length)
    if (clothing.endsWith("s")) {
        console.log("snake")
    }
})
let factoid = true