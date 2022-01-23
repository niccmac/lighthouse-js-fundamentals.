/*const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];*/

stations = [
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school'],
];

const chooseStation = function (x) {
  let voteHere = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i][1] >= 20 && (x[i][2] === 'school' || x[i][2] === 'community centre')) {
      voteHere.push(x[i][0]);
    }
  }
  return voteHere;
}

console.log(chooseStation(stations));
