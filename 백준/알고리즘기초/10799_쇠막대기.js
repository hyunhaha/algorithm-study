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
    return this.top === 0 ? 1 : 0
  }
  pop() {
    if (!this.isEmpty()) {
      this.top -= 1;
      return this.data.splice(-1)[0]
    }
  }
  length() {
    return this.top;
  }
}
const solution = (line) => {
  let stack = new Stack();
  let open = 0;
  let answer = 0;
  line.split('').map(e => {
    console.log(e)
    if (e === '(') {
      stack.push(e);
      open += 1;
      if (open > 1) answer += 1;
    } else {
      stack.pop();
      if (open > 0) {
        answer += stack.length();
      }
      open = 0
    }
  });
  return answer
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,

  output: process.stdout,
});
let input;


rl.on('line', function (line) {
  console.log(solution(line));
  rl.close();
}).on('close', function () {
  process.exit();
});