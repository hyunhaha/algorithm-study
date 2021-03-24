const isPrime = (n) => {
  if (n < 2) return false
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
const solution = ([n, line]) => {
  return line.split(' ').map(e => Number(e)).filter(e => isPrime(e)).length
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

/////////////////////////////////
const isPrime = (n) => {
  if (n < 2) return false
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
const solution = ([n, line]) => {
  return line.split(' ').map(e => Number(e)).filter(e => isPrime(e)).length
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