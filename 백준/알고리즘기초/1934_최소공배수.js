const GCD = (a, b) => (b > 0 ? GCD(b, a % b) : a);
const LMC = (a, b, gcd) => (a * b) / gcd;
const solution = (line) => {
  let answer = '';
  let n = line.shift();
  for (let i = 0; i < n; i++) {
    let [a, b] = line[i].split(' ');
    let gcd = GCD(a, b)
    answer += LMC(a, b, gcd) + '\n';
  }
  return answer
}
(function () {
  let inputLines = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");

  console.log(solution(inputLines));
})();