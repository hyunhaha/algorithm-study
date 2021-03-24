const GCD = (a, b) => (b > 0 ? GCD(b, a % b) : a);
const LCM = (a, b, gcd) => (a * b) / gcd;
const solution = (line) => {
  const [a, b] = line.split(' ').map(e => Number(e));
  let answer = '';
  let gcd = GCD(a, b);
  let lcm = LCM(a, b, gcd)
  answer = gcd + '\n' + lcm;
  return answer
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