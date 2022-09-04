let name = "Aman Kumar Gupta"
console.log(name.length)    // return the length of string 
console.log(name.toUpperCase())    // convert the characters to upper case
console.log(name.toLowerCase())    // convert the characters to lower case 
console.log(name.slice(2,7))    // will slice from lowerBound to upperBound-1
console.log(name.slice(2))
console.log(name.replace("A", "Cha"))  // Exact characters will be matched and replaced

let name2 = " Roshan"
console.log(name.concat(" is a friend of",name2," OK"))
console.log(name2.trim()) // Removes the leading and trailing white space and line terminator characters from a string.

// for (let i=0; i<name.length; i++) {
//   console.log(name[i])
// }

// for(let b of name) {
//   console.log(b)
// }

// for (a in name) {
//   console.log(`name[${a}] = ${name[a]}`)
// }