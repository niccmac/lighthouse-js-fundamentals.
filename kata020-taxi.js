const blocksAway = function (directions) {
  let position = { east: 0, north: 0 };
  let currentCompass = "north";
  let directionsChange = {
    "north": {
      "right": "east",
      "left": "west"
    },
    "east": {
      "right": "south",
      "left": "north"
    },
    "south": {
      "right": "west",
      "left": "east"
    },
    "west": {
      "right": "north",
      "left": "south"
    }
  }

  for (let c = 0; c < (directions.length); c += 2) {
    if (c === 0 && (directions[c] === "left")) {
      currentCompass = "north";
      position.north = position.north + (directions[1])
    } else {
      currentCompass = directionsChange[currentCompass][directions[c]];
      console.log(currentCompass);
      if (currentCompass === "north") {
        position.north = position.north + (directions[c + 1]);
      } else if (currentCompass === "south") {
        position.north = position.north - (directions[c + 1]);
      } else if (currentCompass === "east") {
        position.east = position.east + (directions[c + 1]);
      } else if (currentCompass === "west") {
        position.east = position.east - (directions[c + 1]);
      }
    }


  }

  return position;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));