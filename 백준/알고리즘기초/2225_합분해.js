const solution = (input) => {
  const [n, k] = input.split(' ').map(e => Number(e));
  const arr = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
  arr[0][0] = 1;
  for (let i = 0; i <= k; i++) {
    for (let j = 0; j <= n; j++) {
      for (let k = 0; k <= j; k++) {
        if (i - 1 >= 0) {
          arr[i][j] += arr[i - 1][j - k];
          arr[i][j] %= 1000000000;
        }
      }
    }
  }
  return arr[k][n]
}

const readline = require('readline');
const { Console } = require('console');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(line));
}).on('close', function () {

  process.exit();
});