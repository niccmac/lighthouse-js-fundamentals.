const repeatNumbers = function (data) {
  let returnValues = "";
  let num1 = 0;
  let num2 = 0;
  for (let x = 0; x < data.length; x++) {
    num1 = data[x][0];
    num2 = data[x][1];
    for (y = 0; y < num2; y++) {
      returnValues += String(num1);
    }
    returnValues += ",";
  }
  return returnValues;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));