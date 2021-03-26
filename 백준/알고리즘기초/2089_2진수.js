const solution = (input) => {
  let answer = ''

  while (input !== 0) {
    if (input % -2 === 0) {
      answer += '0';
      input /= -2;
    } else {
      answer += '1'
      input = (input - 1) / -2
    }
  }
  return answer.split('').reverse().join('')

}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout,
});
let input; rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
