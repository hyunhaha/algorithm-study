const solution = (n) => {
  let arr = Array.from(new Array(101), () => new Array(10).fill(0));

  let num = 1000000000;
  for (let i = 1; i < 10; i++) {
    arr[0][i] = 1;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < 10; j++) {
      arr[i][j] = ((arr[i - 1][j - 1] || 0) % num) + ((arr[i - 1][j + 1] || 0) % num);
    }
  }
  return arr[n - 1].reduce((acc, e) => (acc + e) % num, 0);
}
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(+line));
  rl.close();
}).on('close', function () {
  process.exit();
});