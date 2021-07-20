function solution(places) {
  var answer = [];
  for (let k = 0; k < places.length; k++) {
    let room = places[k];
    answer.push(solve(room));
  }
  return answer;
}

const solve = (room) => {
  let arrP = [];
  let distance = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (room[i][j] === 'P') {
        if (i + 1 < 5) {
          if (room[i + 1][j] === 'P') return 0;
        }
        if (j + 1 < 5) {
          // console.log(room[i][j+1])
          if (room[i][j + 1] === 'P') return 0;
        }
        if (i + 1 < 5 && j + 1 < 5) {
          if (room[i + 1][j + 1] === 'P') {
            if (room[i + 1][j] === 'O' || room[i][j + 1] === 'O') return 0
          }
        }
        if (i > 0 && j + 1 < 5) {
          if (room[i - 1][j + 1] === 'P') {
            if (room[i - 1][j] === 'O' || room[i][j + 1] === 'O') return 0
          }
        }
        if (i + 2 < 5) {
          if (room[i + 2][j] === 'P' && room[i + 1][j] === 'O') return 0
        }
        if (j + 2 < 5) {
          if (room[i][j + 2] === 'P' && room[i][j + 1] === 'O') return 0
        }
      }
    }
  }

  return 1;
}

const manhatten = (a, b) => {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
}