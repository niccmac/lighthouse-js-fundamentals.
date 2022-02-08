const sumLargestNumbers = function (data) {
  let sum1 = data[0];
  let sum2 = data[0];
  for (let i = 0; i < data.length; i++) {
    if (sum1 < data[i]) {
      sum1 = data[i];
    }
  }
  for (let j = 0; j < data.length; j++) {
    if (sum1 != data[j] && sum2 < data[j]) {
      sum2 = data[j];
    }
  }


  return sum2 + sum1;
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));