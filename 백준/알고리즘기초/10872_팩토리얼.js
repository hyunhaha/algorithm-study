const solution = (n) => {
  n = Number(n)
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    answer *= i
  }
  return answer
}
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(line));
  rl.close();
}).on('close', function () {
  process.exit();
});