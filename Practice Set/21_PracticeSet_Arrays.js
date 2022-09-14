// CH-05 Practice Set
// 01
console.log("01")
arr = [44, 23, 345, 32, 67]
let a = prompt("Enter a number : ")    // by default it is a string
a = Number.parseInt(a)    // to convert a to integer
arr.push(a)
console.log(arr)
console.log("\n")

// 02
console.log("02")
arr1 = [44, 23, 345, 32, 67]
let b
while (b != 0) {
  b = prompt("Enter a number : ")
  b = Number.parseInt(b)
  arr1.push(b)
}
console.log(arr1)
console.log("\n")

// 03
console.log("03")
let arr2 = [340, 33, 23, 67, 43, 90]
const numDivBy_10 = (v) => {
  return v % 10 == 0
}
let c = arr2.filter(numDivBy_10)
console.log("After filtering nos. divisible by 10 : ", c)
console.log("Original Array : ", arr2)
console.log("\n")

// 04  // we will be using map instead of forEach method as it creates a new array
console.log("04")
let arr3 = [11, 9, 23, 16, 43, 8]
let d = arr3.map((v) => {
  return (v * v)
})
console.log("Squared array : ", d)
console.log("Original Array : ", arr3)
console.log("\n")

// 05
console.log("05")
let arr4 = [1, 2, 3, 4, 5, 6]
let e = arr4.reduce((aman, kumar) => {
  return aman * kumar
})
console.log(`Factorial of first 6 natural nos. is : `, e)