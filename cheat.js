//declared a variable
let variable = "cheese"

//reassigning the variable
variable = "nachos"

"string"

48701985 //number

//this is an array (or list)
let array = [
    "listItem", 
    "otherThing",
    "parmesan"
]
//adds item to array
array.push("tie")

//to get length of array (or)
array.length

//this is a loop. i initializes counter, then middle statement checked for true, if true run code in code block (code in curly brackets) after it runs, add 1 to i
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// for loop shortcut
familyNames.forEach(familyName => {
    sayHello(familyName);
})


//object, needs a key(or preperty) and a value 
let object = {
    phone: 12,
    cotton: ["yarn", "sheets", "socks"],
    home: {
        address: "Crescent",
        city: "Mesa"
    }
}
//calls specific nested object
object.cotton[0]
object.home.city
object["phone"]
object.candy = "snickers"

//functions have input and output, put in given info, function runs and returns a value. don't reuse variable names inside of a function
function square(num){
    let newSquaredNumber = num * num
    return newSquaredNumber;
}

//calls function
let squaredNumber = square(13)


//if statement.
if (5>3){

} else { 
    // || or
    // === equals
    // < less than
    // > greater than
    // && and
    // <=  >=  
    // !== not equal to
    // ! means not

}

{/* // curly brackets are also a code block */}
{
    codeBlock
}

//displays given value
console.log(givenValue)

// call back functions where you pass a function into a function. both do the same thing. second one is cleaner.
familyNames.forEach(function (familyName) {
    console.log(familyName);
})
familyNames.forEach(familyName => {
    console.log(familyName);
})

