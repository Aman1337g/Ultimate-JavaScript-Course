// let n = prompt("Enter a number")
// n = Number.parseInt(n)
// let i = 0
// while(i<n) {
//   console.log(i)
//   i++     
// }       //condtion check the block run
// do {
//   console.log(i)
//   i++
// }while(i<n);  //block run the condition check

//factorial via while loop
let n=prompt("Enter a number")
n = Number.parseInt(n)
let f = 1, g = n
do {
  f*=n
  n--
}while(n!=1);
console.log("Factorial of " + g + " is " + f);