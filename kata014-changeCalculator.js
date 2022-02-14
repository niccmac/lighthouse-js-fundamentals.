const calculateChange = function (total, cash) {
  let change = cash - total;

  let finalCoins = {};
  const coins = [
    ["twentyDollar", 2000],
    ["tenDollar", 1000],
    ["fiveDollar", 2000],
    ["twoDollar", 200],
    ["oneDollar", 100],
    ["quarter", 25],
    ["dime", 10],
    ["nickle", 5],
    ["penny", 1]
  ]
  let newChange = change;

  let findChange = function (coins, newChange, finalCoins) {
    for (let i = 0; i < coins.length; i++) {

      if (Math.floor(newChange / coins[i][1]) > 0) {
        let newKey = coins[i][0];
        console.log(newKey);
        finalCoins[newKey] = Math.floor(newChange / coins[i][1]);
        newChange = newChange % coins[i][1];
      }
    }
  }
  findChange(coins, newChange, finalCoins);
  return finalCoins;
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));