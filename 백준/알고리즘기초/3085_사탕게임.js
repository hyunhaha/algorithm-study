const solution = (input) => {

  let n = Number(input.shift());
  let map = [];
  input.forEach(e => {
    map.push(e.split(''))
  });
  const x = [0, 1, 0, -1];
  const y = [1, 0, -1, 0];

  let max = 0;
  const garo = (arr) => {
    for (let i = 0; i < n; i++) {
      let count = 1;
      for (let j = 0; j < n - 1; j++) {

        if (arr[i][j] === arr[i][j + 1]) {
          count++
        } else {
          if (max < count) max = count;
          count = 1;
        }
      }
    }
  }
  const sero = (arr) => {
    for (let i = 0; i < n; i++) {
      let count = 1;
      for (let j = 0; j < n - 1; j++) {

        if (arr[j][i] === arr[j + 1][i]) {
          count++;
        } else {
          if (max < count) max = count;
          count = 1;
        }
      }
    }
  }
  const search = (arr) => {
    for (let k = 0; k < 2; k++) {
      for (let i = 0; i < n; i++) {
        let count = 0;
        let color = curColor(i, 0, k);
        for (let j = 0; j < n; j++) {
          if (curColor(i, j, k) === color) {
            count++;
            if (count > max) {
              max = count;
            }
          } else {
            color = curColor(i, j, k);
            count = 1;
          }
        }
      }

    }
  }
  const curColor = (x, y, k) => {
    if (k === 0) return map[x][y];
    else return map[y][x]
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {

      for (let k = 0; k < 4; k++) {
        if (map[i + x[k]] && map[i + x[k]][j + y[k]] && map[i][j] !== map[i + x[k]][j + y[k]]) {

          let temp = map[i][j];
          map[i][j] = map[i + x[k]][j + y[k]];
          map[i + x[k]][j + y[k]] = temp;

          search(map)

          temp = map[i][j];
          map[i][j] = map[i + x[k]][j + y[k]];
          map[i + x[k]][j + y[k]] = temp;
        }
      }
    }
  }
  return max
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});