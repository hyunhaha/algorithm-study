const solution = (input) => {
  let n = Number(input.shift());
  console.log(input)
  let answer = '';
  let arr = new Array(11).fill(0);
  arr[1] = 1;
  arr[2] = 2;
  arr[3] = 4;
  for (let i = 4; i <= 10; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  for (let i = 0; i < n; i++) {
    answer += arr[Number(input[i])] + '\n';
  }
  return answer
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