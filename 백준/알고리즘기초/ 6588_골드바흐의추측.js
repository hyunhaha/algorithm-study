const range = (n) => {
  let arr = new Array(n + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i + i; j <= n; j += i) {
        arr[j] = false
      }
    }
  }
  return arr
}
let arr = range(1000000);
let get = (n) => {
  for (let i = 3; i <= n; i++) {
    if (arr[i]) {
      if (arr[n - i]) {
        return `${n} = ${i} + ${n - i}`;
      }
    }
  }
  return "Goldbach's conjecture is wrong."
}
const solution = (input) => {
  let answer = [];
  for (let i = 0; i < input.length - 1; i++) {
    answer.push(get(Number(input[i])))
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
