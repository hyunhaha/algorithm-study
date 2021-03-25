// const isPrime = (number) => {
//   if (number < 2) return false
//   for (let i = 2; i * i <= number; i++) {
//     if (number % i === 0) return false
//   }
//   return true
// }
// const solution = (line) => {
//   let [n, m] = line.split(" ").map(e => Number(e))
//   let answer = ''
//   for (let i = n; i <= m; i++) {
//     if (isPrime(i)) answer += i + '\n'
//   }
//   return answer
// }
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on('line', function (line) {
//   console.log(solution(line));
//   rl.close();
// }).on('close', function () {
//   process.exit();
// });

const solution = (line) => {
  let [n, m] = line.split(' ').map(e => Number(e));
  let arr = new Array(m + 1).fill(true);
  let answer = []
  arr[1] = false
  for (let i = 2; i * i <= m; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= m; j += i) {
        arr[j] = false
      }
    }
  }
  for (let i = n; i <= m; i++) {
    if (arr[i]) answer.push(i)
  }
  return answer.join('\n')
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