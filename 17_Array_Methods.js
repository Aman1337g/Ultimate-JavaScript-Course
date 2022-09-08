let num = [223, 3, 23, 23, 32, 2, 44]
let b = num
console.log(b)
console.log(typeof (b))
console.log("\n")

// toString()
// - converts to string
b = num.toString()       // b is now a string
console.log(b)
console.log(typeof (b))
console.log("\n")

// join()
// - joinss the array items with a seperator in between
let c = num.join("+")
console.log(c, typeof c)
console.log("\n")

// pop()
// - removes last element from the original array
// changes the same array
num.pop()
console.log(num)
let d = num
let r = num.pop()    // pop returns the popped element
console.log(d, r)
r = d.pop()
console.log(d, r)
r = d.pop()
console.log(d, r)
console.log(d)
console.log("\n")

// push()
// - adds element to the original array
num.push(68)
console.log(d)
console.log(num)
r = num.push(99)    // push returns the new array length
console.log(num, r)
console.log('\n')

// shift()
// removes and returns the first element of the original array
r = d.shift()
console.log(num, r)
console.log(d, r)
console.log('\n')

// unshift()
// adds new element to the beginning of original array and returns new array length
r = d.unshift(57)
console.log(num, r)
console.log(d, r)