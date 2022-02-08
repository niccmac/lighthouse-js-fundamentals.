/*let x=12;

for(let i=x; i<1; i--){
    console.log(x);
    console.log(i);
    console.log(x*i);
    x--;
} 
const amounts = [61.00, 52.25, 122.99, 5.00];

let total = 0;

for (let i = 0; i < amounts.length; i++) {
    total += amounts[i];
}
console.log('Order total is:', total);

function isThisWorking(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
    return "Returning: I am returning this string!";
  }
  
  isThisWorking(3);
  function isThisWorking(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  }
  
  isThisWorking(3);


  //LOOPING-RANGE
function range(start, end, step) {
  var showRange = [];
  if (isNaN(start) || isNaN(end) || isNaN(step) || start > end || step < 1) {
    return showRange;
  } else {
    for (let i = start; i <= end; i += step) {
      showRange.push(i);
    }
  }
  return showRange;
}
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

function lastIndexOf(array, value) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

//Concat array
function merge(arr1, arr2) {
  let newArr = [];
  let longestLoop = arr1.length > arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < longestLoop; i++) {
    if (isNaN(arr1[i] || isNaN(arr2[i]))) {
      return "Argument error."
    } else {
      if (i < arr1.length){
        newArr.push(arr1[i]);
      }
      if (i < arr2.length){
        newArr.push(arr2[i]);
      }
    }
  }
  return newArr.sort((a, b) => (a - b));
}
console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);

//Udacity Umbrella
var umbrella = {
  color: "pink",
  isOpen: false,
  open: function(){
    if (umbrella.isOpen === true){
      return "The umbrella is already opened!"
    }else{
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  }
};

//Trash to treasure

var smartGarbage = function (trash, bins) {
    if (trash === "recycling") {
      bins.recycling = bins.recycling + 1;
    } else if (trash === "compost") {
      bins.compost = bins.compost + 1;
    } else {
      bins.waste = bins.waste + 1;
    }
    return bins;
  }
  

console.log(smartGarbage(7, { waste: 4, recycling: 2, compost: 5 }));

//Driving Mayor Daisy
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]
function carPassing(cars, speed) {
  var newEntry = {
    time: Date.now(),
    speed: speed
  }
  cars.push(newEntry);
}
const speed = 38

carPassing(cars, speed);
console.log(cars);

//We're rooting for you
function judgeVegetable(veg, metric) {
  var highestScore = veg[0][metric];
  var winner = veg[0].submitter;
  for (let i = 1; i < veg.length; i++) {
    if (veg[i][metric] > highestScore) {
      highestScore = veg[i][metric];
      winner = veg[i].submitter;
    }
  }
  return winner;
}
const vegetables = [
  // {
  //   submitter: 'Old Man Franklin',
  //   redness: 10,
  //   plumpness: 5
  // },
  // {
  //   submitter: 'Sally Tomato-Grower',
  //   redness: 2,
  //   plumpness: 8
  // },
  // {
  //   submitter: 'Hamid Hamidson',
  //   redness: 4,
  //   plumpness: 3
  // }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));
*/



const whereCanIPark = function (spots, vehicle) {
  let space = [0,0];
  for(let c = 0; c < spots.length; c++){
    for(let r = 0; r < spots[c].length; r++){
      if(vehicle === "motorcycle"){
        if(spots[c][r] === "R" || spots[c][r] === "S" || spots[c][r] === "M"){
          space = [[r],[c]];
          return space;
        }else{
          space = false;
        }
      }else if(vehicle === "small"){
        if(spots[c][r] === "R" || spots[c][r] === "S"){
          space = [[r],[c]];
          return space;
        }else{
          space = false;
        }
      }else if(vehicle === "regular"){
        if(spots[c][r] === "R"){
          space = [[r],[c]]; 
          return space;
        }else{
          space = false;
        }
      }
    }
  }
  return space;
};



 console.log(whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
      ['s', 'M', 's', 'S', 'r', 'M'], // 1
      ['s', 'M', 's', 'S', 'r', 'm'], // 2
      ['S', 'r', 's', 'm', 'r', 'M'], // 3
      ['S', 'r', 's', 'm', 'r', 'M'], // 4
      ['S', 'r', 'S', 'M', 'M', 'S']  // 5
    ],
    'regular'
  ));

  console.log(whereCanIPark(
    [
      ['M', 'M', 'M', 'M'],
      ['M', 's', 'M', 'M'],
      ['M', 'M', 'M', 'M'],
      ['M', 'M', 'r', 'M']
    ],
    'small'
  ));

  console.log(whereCanIPark(
    [
      ['s', 's', 's', 's', 's', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['S', 'r', 's', 'm', 'r', 's'],
      ['S', 'r', 's', 'm', 'R', 's'],
      ['S', 'r', 'S', 'M', 'm', 'S']
    ],
    'motorcycle'
  ));