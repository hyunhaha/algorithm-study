class Stack {
  constructor() {
    this.data = []
    this.top = 0
  }
  push(e) {
    this.data[this.top] = e
    this.top += 1
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
}
const solution = (str) => {
  let stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i])
    }
    if (str[i] === ')') {
      if (stack.pop() !== '(') {
        return 'NO';
      }
    }
  }
  if (!stack.isEmpty()) return 'NO'
  return "YES"
}
(function () {
  let inputLines = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .slice(1, -1);

  console.log(inputLines.map((input) => solution(input)).join("\n"));
})();