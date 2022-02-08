const camelCase = function (input) {
  let camelOut = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] != " ") {
      camelOut.push(input[i]);
    } else {
      camelOut.push(input[i + 1].toUpperCase());
      i++;
    }
  }
  return String(camelOut).replaceAll(",", "");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));