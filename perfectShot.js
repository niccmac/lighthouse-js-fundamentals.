const finalPosition = function (moves) {
  let final = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    console.log(moves[i]);
    if (moves[i] === 'north') {
      final[1]++;
    } else if (moves[i] === 'east') {
      final[0]++;
    } else if (moves[i] === 'south') {
      final[1]--;
    } else if (moves[i] === 'west') {
      final[0]--;
    }
  } return final;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

console.log(finalPosition(moves));
