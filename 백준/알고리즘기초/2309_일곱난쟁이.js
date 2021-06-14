const solution = (input) => {
  let arr = input.map(Number);
  let sum = arr.reduce((acc, e) => acc + e, 0);
  let answer
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum === arr[i] + arr[j] + 100) {
        answer = arr.filter(e => e !== arr[i] && e !== arr[j])
      }
    }
  }
  return answer.sort((a, b) => a - b).join('\n')
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