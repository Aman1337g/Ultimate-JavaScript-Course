let a = prompt("Hey what's your age ?");
// console.log(typeof a);
a = Number.parseInt(a);  //way to convert string into number (typecasting)
// console.log(typeof a);
if (a<0) {
  alert("Invalid Age!!");
}
  
else if (a<9) {
  alert("You are a kid you cannot even think of driving");
}
else if (a>=9 && a<18) {
  alert("You are a kid you cannot even think of driving");
}
else {
  alert("you can drive as you are above 18");
}
alert("Done");
//Ternary Operator
console.log("You can", (a<18 ? "not drive" : "drive"));

//Switch case statement
// var foo = 0;
// switch (foo) {
//   case -1:
//     console.log('negative 1');
//     break;
//   case 0: // foo is 0 so criteria met here so this block will run
//     console.log(0)
//     // NOTE: the forgotten break would have been here
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break; // it encounters this break so will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log('default');
// }