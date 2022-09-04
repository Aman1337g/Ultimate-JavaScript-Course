// string is a collection of characters

name = "Aman"
console.log(name)
console.log(name.length) // name.length will show the length of the string 

// string by using single quotes
let friend = 'Roshan'
console.log(friend)
// let myfriend = 'Shubham" // don't do this

console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])

// Template Literals - uses backitcs instead of quotes to define a string
// With template literals we can use both single and double quotes

let boy1 = "Shobhan"
let boy2 = "Aditya"
let sentence = `${boy1} is a friend of ${boy2}`
console.log(sentence)
// We can insert variables directly in template literals. This is called string interpolation


// Escape sequence charaters
let fruit = 'bana\"na'
console.log(fruit.length)
console.log(fruit)