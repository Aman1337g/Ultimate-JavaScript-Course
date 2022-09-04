//01
let marks = {
    harry : 98, 
    rohan : 70,
    aakash : 7
  }
  
  // Printing marks using for loop
  for(let i = 0; i < Object.keys(marks).length; i++) {    // Object.keys(marks).length = will give the length of keys (no, of keys) = 3 here, Object.keys(marks) = will be giving us the keys [array]
    // console.log("Marks of "+ Object.keys(marks)[i] +" are " + marks[Object.keys(marks)[i]])
  }
  
  // 02
  // // Printing marks using for in loop
  // for (let b in marks) {
  //   console.log("Marks of "+ b +" are " + marks[b])
  // }
  
  //03
  // let correct = 6
  // while(prompt("Enter a value") != correct) {
  //   alert("Try again !!")
  // }
  // console.("You have entered the correct number")
  
  //04
  const mean = (a,b,c,d,e)=> {
    return (a+b+c+d+e)/5
  }
  console.log(mean(1,2,3,4,5))
  