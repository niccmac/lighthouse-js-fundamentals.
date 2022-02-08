const multiplicationTable = function (maxValue) {
  let multiTable = [];
  let finalTable = "";
  for (let i = maxValue - 1; i >= 0; i--) {
    var addValue = maxValue - [i];

    if (addValue != 0) {
      multiTable.push(addValue);
    }

  }
  for (let j = 0; j < multiTable.length; j++) {
    for (let k = 0; k < multiTable.length; k++) {
      let tableValue = multiTable[j] * multiTable[k];
      finalTable = finalTable + ` ${tableValue}`;
    }
    finalTable = finalTable + "\n";
  }
  return finalTable;
};



console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));