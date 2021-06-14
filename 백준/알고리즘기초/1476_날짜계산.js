const solution = (input) => {
  const [e, s, m] = input.split(' ').map(e => Number(e));
  let count = 1;
  while (true) {
    if ((count - e) % 15 === 0 && (count - s) % 28 === 0 && (count - m) % 19 === 0) {
      console.log(count);
      process.exit();
    }
    count++
  }
}
const readline = require('readline');
const { Console } = require('console');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  solution(line);
});