const solution = ([n, m]) => {
  let five = [0, 0, 0]
  let two = [0, 0, 0]

  for (let i = 5; i <= n; i *= 5) {
    five[0] += parseInt(n / i)
  }
  for (let i = 5; i <= m; i *= 5) {
    five[1] += parseInt(m / i)
  }
  for (let i = 5; i <= (n - m); i *= 5) {
    five[2] += parseInt((n - m) / i)
  }
  for (let i = 2; i <= n; i *= 2) {
    two[0] += parseInt(n / i)
  }
  for (let i = 2; i <= m; i *= 2) {
    two[1] += parseInt(m / i)
  }
  for (let i = 2; i <= n - m; i *= 2) {
    two[2] += parseInt((n - m) / i)
  }
  console.log(five, two)
  return Math.min(five[0] - (five[1] + five[2]), two[0] - (two[1] + two[2]))
}
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(line.split(' ').map((e) => Number(e))));
  rl.close();
}).on('close', function () {
  process.exit();
});