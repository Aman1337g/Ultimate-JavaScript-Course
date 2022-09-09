let arr = [2, 54, 7, 6]

// printing elements in array
// using classical for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
console.log("\n")

// using forEach() loop
// As it is clear from its name , applies to each element in array
// could take 3 arguments -
/*
arr.forEach((value , index , array) => {
  // function logic
});
*/

arr.forEach((element) => {
  console.log(element * element)
})
// another way
/*
let square = (element) => {
  console.log(element * element)
}
arr.forEach(square)
console.log("\n")
*/

// using Array.from()
// used to create an array from any other object
// eg. - used to create an array from 'html collection' [will see when working will DOM] = for more information , go to - 
// "https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp"
// if we have html collection we cannot use forEach() we have to use Array.from() to convert it to array first
let name = "Aman Kumar Gupta"
console.log(name)
let ar = Array.from(name)
console.log(ar)

// for...of loop
for (let i of arr) {
  console.log(i)
}
console.log("\n")

// for...in loop
for (let i in arr) {
  console.log(`arr[${i}] : `, arr[i])
}
