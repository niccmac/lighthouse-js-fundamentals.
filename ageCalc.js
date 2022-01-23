const ageCalculator = function (name, yob, cy){
  return (`${name} is `+(cy-yob)+` years old.`)
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));