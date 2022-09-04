// nn bb ss u  (7 primitive datatypes in javascript)
// null number boolean bigint string symbol undefined

let a = null;
let b = 235;
let c = true; // can also be false 
let d = BigInt("576") + BigInt("4")
let e = "Aman"
let f = Symbol("I am a nice symbol")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof a)

//Objects (key-value pairs and non-primitive datatypes)
const item = {
  "aman": true , 
  "roshan": false,
  "shubham": 75, 
  "Rohan": undefined
}
console.log(item["roshan"])