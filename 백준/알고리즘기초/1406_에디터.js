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

}
let left = new Stack();
let right = new Stack();
let answer = '';
const solution = (inputLines) => {
  inputLines.shift().split('').map(e => left.push(e));
  let n = inputLines.shift();
  for (let i = 0; i < n; i++) {
    let [command, item] = inputLines[i].split(' ');
    if (command === 'L') {
      !left.isEmpty() && right.push(left.pop())
    } else if (command === 'D') {
      !right.isEmpty() && left.push(right.pop());
    } else if (command === 'B') {
      !left.isEmpty() && left.pop()
    } else if (command === 'P') {
      left.push(item)
    }
  }
  answer += left.data.join('');
  answer += right.data.reverse().join('');

  return answer
}
(function () {
  let inputLines = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");

  console.log(solution(inputLines));
})();