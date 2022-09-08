// delete
// - deletes element at the specified position in the original array
// it is an operator
// not affects the length of the array
let num = [223, 23, 32, 2, 44, 58]
let d = num
delete d[3]
console.log(num)
console.log(num.length)
console.log("\n")

// concat()
// - to add one or more arrays together
// does not change existing array
let n1 = [1, 2]
let n2 = [5, 6]
let concArr = num.concat(n1, n2)
console.log(concArr)
console.log(num)
console.log("\n")

// sort() 
// - helps to sort an array ALPHABETICALLY => first lists out nos. with 0 then 1 then 2 and so on ....
// modifies the original array

// let n3 = [0, 1, 2, 33, 1, 22, 35, 377]
// n3.sort()
// console.log(n3)

let compare = (a, b) => {
  return a - b    // if written 'b - a' then sorted array in decreasing order
}
num.sort(compare)    // here sort method is using compare function as the basis of sorting
console.log(num)

// another way of writing : 
// num.sort(compare = (a, b) => {
//   return a - b
// })
console.log("\n")

// reverse()
// reverses the original array
let r = n1
r.reverse()
console.log(r)
console.log(n1)
console.log("\n")

// splice()
// used to add new array items
// takes 3 arguements -
// position to add , no. of elements to remove , elements to be added
// returns deleted items
// modifies the source array
num = [223, 23, 32, 2, 44, 58]
let deleted_items = num.splice(1, 4, 1, 2, 3, 4)
console.log(num, deleted_items)
console.log(typeof (deleted_items))
console.log("\n")

// slice()
// slices out a portion of array and creates a new array
// if one arguement then slices from that index to length_of_array (INCLUDED)
// if two arguements (start, end) then slices from start to 'end - 1'
// it does not modifies original array but creates a new array
console.log("Source array : ", num)
let f = num.slice(1, 5)
console.log("slice(1, 5) : ", f)
let e = num.slice(3)
console.log("slice(3) : ", e)