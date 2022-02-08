const checkAir = function (samples, threshold) {
  let airResult = "";
  let numDirty = 0;

  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      numDirty += 1;
    }
  }
  if (numDirty / samples.length < threshold) {
    airResult = "Clean";
  } else {
    airResult = "Polluted";
  }
  return airResult;
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))