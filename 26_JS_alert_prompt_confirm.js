// 1. alert - used to invoke a mini windows with a message
// 2. prompt - used to take user input as string
// 3. confirm - shows a message and waits for the user to press OK or Cancel. Returns true for OK and false for Cancel

/*
  Limitation :
    1. The exact location and look is determined by the browser 
    2. It blocks the execution of main execution thread
*/

alert("Enter a value of a!")
let a = prompt("Enter value of a : " , "24")  // now take 24 as a default value

alert(`You have entered "a" of type ${typeof a}`) 
a = Number.parseInt(a)  // to convert a from string to number
alert(`You have entered "a" of type ${typeof a}`)

let write = confirm(`Do you want to write "a" in the page : `)
if(write) {
  document.write(a) // writes the value of a in the document (WORKS for a HTML page)
}
else {
  document.write("Please allow me to write in the page")
}