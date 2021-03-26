const getPrimeArr = (n) => {
  let arr = new Array(n + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      for (let j = i + i; j <= n; j += i) {
        arr[j] = false
      }
    }
  }
  return arr
}
const gold = (n) => {
  const toNPrimeArr = getPrimeArr(n);
  let count = 0
  for (let i = 0; i < toNPrimeArr.length; i++) {
    if (i > n / 2) break;
    if (toNPrimeArr[i]) {
      if (toNPrimeArr[n - i]) {
        count++
      }
    }
  }
  return count
}
const solution = (inputLInes) => {
  let n = inputLInes.shift()
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(gold(Number(inputLInes[i])));
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