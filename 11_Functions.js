//Seperation of Logic
let a = 1;
let b = 2;
let c = 3;

// M-1
// function onePlusAvg(x, y) {  // x and y act as local parameters
//   console.log("Done");   // It's not necessary for your function to have a parameter
//   return Math.round(1 + (x+y)/2); // Math.round rounds the result
// }
// console.log("One plus Average of a and b is ",onePlusAvg(a,b));
// console.log("One plus Average of a and b is ",onePlusAvg(b,c));
// console.log("One plus Average of a and b is ",onePlusAvg(c,a));

// M-2
// Another way by using arrow function ("=>")
const onePlusAvg = (x,y) =>{     // Modern way of writing function
  return 1 + (x+y)/2;
}
console.log("One plus Average of a and b is ",onePlusAvg(a,b));
console.log("One plus Average of a and b is ",onePlusAvg(b,c));
console.log("One plus Average of a and b is ",onePlusAvg(c,a));

const hello = ()=>{
  console.log("Hey, how are you? I am toh fine yaar.")
  return "hi"
}
let v = hello();  // Any value which is returning in a function is stored in the variable which we assign to a function while invoking it otherwise it will not be printed
console.log(v)