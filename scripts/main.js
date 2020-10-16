console.log("Welcome to the main module")

// 1. Define a function called "makeSandwich" that takes 4 parameters: protein, cheese, veggie, bread
const makeSandwich = (protein, cheese, veggie, bread) => {
    let sandwichObj = {
        protein: protein,
        cheese: cheese,
        veggie: veggie,
        bread: bread
    }
    return sandwichObj
}


// 2. makeSandwich should create a new sandwich object with the 4 parameters as its key/value pairs

console.log(makeSandwich())

// 3. makeSandwich will return our newly created sandwich
let hamSandwich = makeSandwich("ham", "swiss", "lettuce", "white")

let turkeySandwich = makeSandwich("turkey", "cheddar", "spinach", "sourdough")


// 4. Call it a few times passing in different arguments to make different sandwiches!
console.log(hamSandwich)
console.log(turkeySandwich)

