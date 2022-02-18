const squareCode = function (message) {
  let squareOut = [];
  let squareOutString = [];
  const messSpace = (message).replaceAll(" ", "");
  const square = Math.ceil(Math.sqrt(messSpace.length));
  const messArr = messSpace.split("");
  for (let i = 0; i < square; i++) {
    squareOut[i] = [];
  }
  while (messArr.length > 0) {
    for (let j = 0; j < square; j++) {
      if (messArr.length > 0) {
        squareOut[j].push(messArr.shift());
      }
    }
  }
  for (let i = 0; i < squareOut.length; i++) {
    squareOutString.push(squareOut[i] + " ");
  }
  return squareOutString.toString().replaceAll(",", "");
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));