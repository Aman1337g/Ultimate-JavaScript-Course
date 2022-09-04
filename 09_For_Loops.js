//Program to add first n natural numbers
let n = prompt("Enter the vaule of n");
n = Number.parseInt(n);
let sum = 0;
for(let i = 1; i <= n; i++) {
  sum+=i;
}
console.log("Sum of first "+ n +" natural numbers is "+sum);

//Program to print factorial of a number
// let f = 1;
// let a=prompt("Enter a number");
// for(let i = 2; i<=a; i++) {
//   f*=i;
// }
// alert("The factorial of "+ a +" is "+ f);

//for in loop
// let name = {
//   aman: 38,
//   roshan: 39,
//   shubham: 38,
//   shobhan: 89,
//   mridul: 80
// } 

// Strings are immutable
// for(let a in name) {
//   console.log("Marks of "+ a +" are "+ name[a]);
// }

//for of loop
for (let b of "aman") {
    console.log(b);
  }