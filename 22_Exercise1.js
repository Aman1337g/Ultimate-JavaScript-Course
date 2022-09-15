let random = Math.floor(Math.random() * 100) + 1;
console.log(random)
let noOfGuesses = 0, input 
do {
  input = prompt("Guess the number")
  if(input > random) {
    console.log("Guess is greater"); noOfGuesses++;
  }
  else if(input < random) {console.log("Guess is lesser"); noOfGuesses++;}
} while(input != random);
console.log("Eureka !! You have guessed the number.")
console.log("And your score is ",100-noOfGuesses)