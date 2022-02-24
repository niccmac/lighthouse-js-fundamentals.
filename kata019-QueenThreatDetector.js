let whiteQueen = [2, 5];
let blackQueen = [6, 2];
let board = [];

const generateBoard = function (wq, bq) {
  for (let r = 0; r < 8; r++) {
    board[r] = [0];
    for (let c = 1; c < 8; c++) {
      board[r].push(0);

    }
  }
  board[wq[0]].splice(wq[1], 1, 1);
  board[bq[0]].splice(bq[1], 1, 1);
  return board;
};

let generatedBoard = generateBoard(whiteQueen, blackQueen);

let q1 = [];
const queenThreat = function (generatedBoard) {
  for (let r = 0; r < generatedBoard.length; r++) {
    for (let c = 0; c < generatedBoard[r].length; c++) {
      if (generatedBoard[r][c] === 1) {
        q1.push([r, c]);
      }
    }
  }
  if (q1[0][0] === q1[1][0]) {
    return true;
  };

  if (q1[0][1] === q1[1][1]) {
    return true;
  };

  for (let q = 1; q < 8; q++) {

    if ((q1[0][0] + q) < 8 && (q1[0][1] + q) < 8) {
      let checkq154 = [];
      checkq154.push(q1[0][0] + q);
      checkq154.push(q1[0][1] + q);
      if (checkq154[0] === q1[1][0] && checkq154[1] === q1[1][1]) {
        return true;
      }
    }
    if ((q1[0][0] - q) >= 0 && (q1[0][1] + q) < 8) {
      let checkq178 = [];
      checkq178.push(q1[0][0] - q);
      checkq178.push(q1[0][1] + q);
      if (checkq178[0] === q1[1][0] && checkq178[1] === q1[1][1]) {
        return true;
      }
    }
    if ((q1[0][0] + q) < 8 && (q1[0][1] - q) >= 0) {
      let checkq112 = [];
      checkq112.push(q1[0][0] + q);
      checkq112.push(q1[0][1] - q);
      if (checkq112[0] === q1[1][0] && checkq112[1] === q1[1][1]) {
        return true;
      }
    }
    if ((q1[0][0] - q) >= 0 && (q1[0][1] - q) >= 0) {
      let checkq110 = [];
      checkq110.push(q1[0][0] - q);
      checkq110.push(q1[0][1] - q);
      if (checkq110[0] === q1[1][0] && checkq110[1] === q1[1][1]) {
        return true;
      }
    }
  }
  return false;
};
console.log(queenThreat(generatedBoard));


