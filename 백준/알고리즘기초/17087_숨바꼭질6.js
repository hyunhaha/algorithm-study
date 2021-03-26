const GCD = (a, b) => {
  return b > 0 ? GCD(b, a % b) : a
}
const solution = (input) => {
  const [n, s] = input[0].split(' ').map(e => Number(e));
  let arr = input[1].split(' ').map(e => Number(e));

  arr = arr.map(e => Math.abs(s - e));
  let answer = GCD(arr[0], arr[1] || 0)
  for (let i = 2; i < arr.length; i++) {
    answer = GCD(answer, arr[i])
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