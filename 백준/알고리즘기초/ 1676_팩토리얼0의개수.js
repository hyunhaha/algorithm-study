const solution = (n) => {
  n = Number(n)
  let answer = 0;
  answer += parseInt(n / 5)
  answer += parseInt(n / 25)
  answer += parseInt(n / 125)
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