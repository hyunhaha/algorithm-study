const solution = (line) => {
  let arr = new Array(line + 1).fill(0);
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= line; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 10007
  }
  return arr[line]
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