class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }
  push(e) {
    this.data[this.top] = e;
    this.top += 1;
  }
  isEmpty() {
    return this.top === 0 ? 1 : 0;
  }
  pop() {
    if (!this.isEmpty()) {
      this.top -= 1;
      return this.data.splice(-1)[0];
    }
  }
}
const solution = (line) => {
  let stack = new Stack;
  let tagOpen = false;
  let answer = '';

  line.split('').map(e => {
    if (e === '<') {
      while (!stack.isEmpty()) {
        answer += stack.pop();
      }
      tagOpen = true;
    }
    if (tagOpen) answer += e;
    if (tagOpen && e === '>') {
      tagOpen = false;
    }
    if (!tagOpen && e !== '>' && e !== ' ') {
      stack.push(e)
    }
    if (!tagOpen && e === ' ') {
      while (!stack.isEmpty()) {
        answer += stack.pop()
      }
      answer += ' ';
    }
  })
  while (!stack.isEmpty()) {
    answer += stack.pop();
  }
  return answer;

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