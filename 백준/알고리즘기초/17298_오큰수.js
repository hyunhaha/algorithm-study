const solution = ([n, line]) => {
  let stack = [];
  let answer = new Array(n).fill(-1);
  line.split(' ').map(e => Number(e)).map((e, idx, origin) => {
    while (stack.length !== 0 && origin[stack[stack.length - 1]] < e) {
      answer[stack.pop()] = e;
    }
    stack.push(idx);
  })
  while (stack.length !== 0) {
    answer[stack.pop()] = -1
  }
  return answer.join(' ');
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
//입력 종료 ctrl D