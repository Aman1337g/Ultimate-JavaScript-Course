/*
  Console Object Methods

  1. assert() - used to assert a condition
  2. clear() - clears the console
  3. log() - outputs a message to the console
  4. table() - Displays a tabular data
  5. warn() - used for warnings
  6. error() - used for errors
  7. info() - used for special information
  8. time() and timeEnd() -
*/
console.log(typeof console)
console.log("\n")
console.log(typeof console.log("Aman"))
console.log("\n")
console.log(console)  // will list out all the functions in console object
console.log("\n")

// 1, assert method
console.log("1. assert method")
console.assert(5>79)  // will show 'assertion failed' if false statement , will show undefined if true statement
console.log("\n")

// 2. clear method
console.clear()  // will clear out the console

// 3. log method
console.log("3. log method")
console.log("Hey , I am Aman. What is your name ?")  // prints out the message given
let name = prompt("Enter your name : ")
console.log(`Nice to meet you ${name}`)
console.log("\n")

// 4. table method
console.log("4. table method")
let obj = { a:1 , b:2 , c:3}  
console.table(obj)  // shows the key value pairs in a tabular form  
console.log("\n")

// 5. warn method
console.log("5. warn method")
console.warn("Hey , Please stay away from that guy")  // shows a warning in error colour in browser console tab
console.log("\n")

// 6. error method
console.log("6. error method") 
console.error("Hey, this is an error")  // will show an error with the given message in browser console tab
console.log("\n")

// 7. info method
console.log("7. info method")
console.info("Hey , this is a confidential information")  // log and info are almost similar , just info will show in the info section of message in browser
console.log("\n")

// 8. time() and timeEnd() method
console.log("8. time() and timeEnd() method")
console.log("TIME STARTED")

console.time("forLoop")  // just remember to write the same label, as here is "forLoop"
let i=0
while(i!=10) {
  console.log(i)
  i++
}
console.timeEnd("forLoop") // will show the time taken for execution of the sandwitched statements between time() and timeEnd()
console.log("ITME ENDED")