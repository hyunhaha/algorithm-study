
const solution = (n) => {
  let arr = new Array(n + 1).fill(0);
  arr[1] = 1;
  arr[2] = 3;
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2] * 2) % 10007;
  }
  return arr[n]
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