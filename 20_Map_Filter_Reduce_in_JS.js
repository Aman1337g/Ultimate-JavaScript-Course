// These are higher order array methods
let arr = [34, 33, 23]

// map() method
// could take max. 3 arguments - 
/*
arr.map((value , index , array) => {
  // function logic
});
*/
// creates a new array [Main difference from arr.forEach()]
console.log(arr)
let a1 = arr.map((value) => {
  console.log(value)
  return value + 2
})
console.log(a1)
console.log("\n")
// So , we use arr.map() to make a new array and arr.forEach() to perform operation on array
// passing 3 arguments
let a2 = arr.map((value, index, array) => {
  console.log(value, index, array)
  return value + index
})
console.log(a2)
console.log("\n")

// filter() method
// filters out the array elements which follows out given rule (like here vlaues>50)
// creates a new array
// does not modifies the original array
let arr1 = [34, 33, 23, 67, 43, 90]
let a3 = arr1.filter((v) => {
  return v > 50
})
console.log(a3)
console.log("Original Array : ", arr1)
console.log("\n")

// reduce() method
// reduces an array to a single value
let arr3 = [1, 2, 3, 4, 3, 1]
single_value = (aman, kumar) => {
  return (aman + kumar)
}
let a4 = arr3.reduce(single_value)
console.log(a4)