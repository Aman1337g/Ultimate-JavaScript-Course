// 01
console.log("Answer 1")
let a = prompt("Enter your age : ")
alert("You", (a > 18) ? "can drive" : "cannot drive")

// 02
let conf
console.log("Answer 2")
do {
  let a = prompt("Enter your age : ")
  a = Number.parseInt(a)
  alert("You", (a > 18) ? "can drive" : "cannot drive")
  conf = confirm("Prompt again ?")
} while (conf)
console.log("aman", "kumar")

// 03
console.log("Answer 3")
let c
do {
  let a = prompt("Enter your age : ")
  a = Number.parseInt(a)
  if (a < 0) console.error("Age cannot be negative")
  else if (a > 18) alert("You can drive")
  else alert("You cannot drive")
  c = confirm("Prompt again ?")
} while (c)

// 04
console.log("Answer 4")
let n = prompt("Enter a number : ")
n = Number.parseInt(n)
if(n>4) window.location.href = "https://www.google.com"

// 05
console.log("Answer 5")
let color = prompt("Enter color : ")
document.body.style.background = color  // works for HTML page