/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/


//💎 this is calculating a dogs age into dog years..

//💎 let dogName gets the name from the command line.. the process.argv[2] is the 3rd
// value entered when running the program
let dogName = process.argv[2];

//💎 let humanAge is gettings dogs age in human years,...
// Number() converts the input from a string to a number..
let humanAge = Number(process.argv[3]);

//💎 this declares a variable to store the calculated dog age..
let dogAge;

//💎 if/eles statement.. IF dog is 1 yr old in human yrs,,
// dogs are faster in the 1st year..
//💎 ELSE IF..if dog is 2 yrs old,, the 2nd yr adds more dog years..
//💎 ELSE... for dogs older than 2 yrs olds,,each additional yr = about 5 dog yrs..
if (humanAge === 1) {
    dogAge = 15;
} else if (humanAge === 2) {
    dogAge = 24;
} else {
    dogAge = 24 + (humanAge - 2) * 5;
}

//💎 this prints the result in the terminal as a template literal...
console.log(`Your dog, ${dogName}, is ${humanAge} years old, but that's ${dogAge} years old in dog years!`);