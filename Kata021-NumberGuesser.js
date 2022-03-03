let prompt = require("prompt-sync")();
let randomNum = Math.floor(Math.random() * 100);
let finalNum;

let attempts = [];
while (randomNum != finalNum) {
  let answer = prompt("Guess a number: ");
  let answerToNumber = (Number(answer));
  console.log(answerToNumber);
  console.log("You answered: " + answer);
  if (isNaN(answerToNumber)) {
    console.log("Not a number! Try again!");
  } else if (attempts.includes(answerToNumber)) {
    console.log("Already guessed!");
  } else if (answerToNumber < randomNum) {
    console.log("Too Low!");
    attempts.push(answerToNumber);
  } else if (answerToNumber > randomNum) {
    console.log("Too High!");
    attempts.push(answerToNumber);
  } else if (answerToNumber === randomNum) {
    finalNum = answerToNumber;
    attempts.push(answerToNumber);
    console.log(`You got it! You took ${attempts.length} attempts`)
  } else {
    console.log("Code error, keep on trying. You CAN do this!")

  }
};


