// Chapter2: practice set
// //01
// let age = prompt("What's your age ? ");
// if(age>=10 && age<=20) {
//   alert("Your age lies between 10 and 20");
// }
// else alert("Your age doesn't lies between 10 and 20");

//02
// let fruit = prompt("Enter fruit number : ");
// fruit = Number.parseInt(fruit);
// switch (fruit) {
//   case 0: alert("Banana"); break;
//   case 1: alert("Mango"); break;
//   case 2: alert("Guava"); break;
//   case 3: alert("Chiku"); break;
//   default: alert("Invalid number!!"); break;
// }

// //03
let n = prompt("Enter number : ");
if(n%2==0 && n%3==0) {
  alert(`${n} `+ "is divisible by 2 and 3");
}
else {
  alert("Not divisible by 2 and 3");
}

//04
// let age1 = prompt("Enter age : ");
// // if(age1>=18) {
// //   alert("You can drive");
// // }
// // else alert("You cannot drive");
// // console.log(age1);
// alert(age1>=18? "You can drive": "You cannot drive");