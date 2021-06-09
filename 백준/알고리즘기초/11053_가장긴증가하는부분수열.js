const solution = (input) => {
  const n = Number(input[0]);
  let arr = input[1].split(' ').map(e => Number(e));
  let temp = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && temp[i] <= temp[j]) {
        temp[i] = temp[j] + 1;
      }
    }
  }
  return Math.max(...temp)
}
let input = [];
const readline = require('readline');
const { Console } = require('console');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});