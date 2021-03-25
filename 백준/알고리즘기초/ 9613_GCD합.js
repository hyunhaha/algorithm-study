const GCD = (a, b) => {
  if (b > a) {
    let temp = a;
    a = b;
    b = temp;
  }
  while (a % b !== 0) {
    let num = a % b;
    a = b;
    b = num;
  }
  return b
}


const solution = (input) => {
  let answer = []

  let n = Number(input.shift());
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let arr = input[i].split(' ');
    let count = arr.shift()
    for (let j = 0; j < count; j++) {
      for (let k = j + 1; k < count; k++) {
        sum += GCD(Number(arr[j]), Number(arr[k]))
      }
    }
    answer.push(sum)
  }
  return answer.join('\n')
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