const solution = ([n, line]) => {

  let answer = new Array(Number(n)).fill(-1);
  let stack = [];
  let arr = line.split(' ').map(e => Number(e));
  let obj = arr.reduce((acc, e) => {
    if (e in acc) acc[e] += 1;
    else acc[e] = 1;
    return acc
  }, {});
  console.log(obj);
  arr.map((e, idx, origin) => {
    while (stack.length !== 0 && obj[origin[stack[stack.length - 1]]] < obj[e]) {
      answer[stack.pop()] = e;
    }
    stack.push(idx)
  })
  while (stack.length !== 0) {
    answer[stack.pop()] = -1;
  }

  return answer.join(' ')
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
//7
//1 1 2 3 4 2 1