// collection of some items
// items can be accessed using index (starts from 0)

let marks_class_12 = [12, 100, 56, 98, null, "not present", false]
console.log(marks_class_12)            
console.log(marks_class_12[0])            
console.log(marks_class_12[1])      
console.log(marks_class_12[2])            
console.log(marks_class_12[3])            
console.log(marks_class_12[4])            
console.log(marks_class_12[9])  // nothing is present at index 9 so undefined  
console.log(marks_class_12.length)  // print size of array

marks_class_12[1] = 76      // changes value at index 1
console.log(marks_class_12)

marks_class_12[9] = 88     // added a value at index 9
console.log(marks_class_12)

console.log(marks_class_12.length)
// arrays are mutable but strings are immutable
// in JS , arrays are object
console.log(typeof(marks_class_12))

// printing array using for loop
console.log("\n")
//using for in loop
for (let i in marks_class_12) {
  console.log(marks_class_12[i])
}

console.log("\n")

for (let i = 0; i< marks_class_12.length; i++) {
  console.log(marks_class_12[i])
}

console.log("\n")
//using for of loop
for (let b of marks_class_12) {
  console.log(b)
}