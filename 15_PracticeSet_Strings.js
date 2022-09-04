//01
console.log("aman\"".length)
// "\"" [ESCAPE SEQUENCE CHARACTERS] is treated as single character

//02

// includes
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

// startswith
const str = 'To be, or not to be, that is the question.';
//SYNTAX
// startsWith(searchString)
// startsWith(searchString, position)
// Parameters
// searchString
// The characters to be searched for at the start of this string.
// // position Optional
// The position in this string at which to begin searching for searchString. Defaults to 0.

console.log(str.startsWith('To be')); // true
console.log(str.startsWith('not to be')); // false
console.log(str.startsWith('not to be', 10)); // true
console.log(str.slice('not to be', 10))

// endswith
const str1 = 'My name is Aman Kumar Gupta';
const toCheck = 'Gupta'
console.log(`The string "${str1}" ${str1.endsWith(`${toCheck}`) ? 'ends' : 'not ends'} with '${toCheck}'`)

//03
const str2 = "Aman Kumar Gupta"
console.log(str2.toLowerCase());

//04
let word1 = "Please give me 1000 Rs"
console.log('The amount to be paid is',word1.slice('Please give me '.length))

//05
let friend = 'Anjali'
friend[2] = 'k'
console.log(friend) // friend is not changed, because string is immutable 