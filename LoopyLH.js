function loopyLighthouse(range, multiples, words) {
  if (isNaN(range[0]) || isNaN(range[1]) || isNaN(multiples[0]) || isNaN(multiples[1]) || typeof words[0] != 'string' || typeof words[1] != 'string') {
    return "Argument error"
  } else {
    for (let i = range[0]; i <= range[1]; i++) {
      if (i % multiples[0] === 0 && i % multiples[1] === 0) {
        console.log(words[0] + words[1])
      } else if (i % multiples[0] === 0) {
        console.log(words[0])
      } else if (i % multiples[1] === 0) {
        console.log(words[1])
      } else {
        console.log(i);
      }
    }
  }
}
console.log(loopyLighthouse([1,10],[2,3],["TWO","THREE"]))