class Deque {
  constructor() {
    this.data = [];
    this.top = 0;
  }
  push(e) {
    this.data[this.top] = e;
    this.top += 1;

  }
  unshift(e) {
    this.data.unshift(e);
    this.top += 1;
  }
  isEmpty() {
    return this.top === 0 ? 1 : 0;
  }
  pop() {
    if (!this.isEmpty()) {
      this.top -= 1;
      return this.data.pop();
    }
    return -1
  }
  shift() {
    if (!this.isEmpty()) {
      this.top -= 1;
      return this.data.shift();
    }
    return -1
  }
  length() {
    return this.top
  }
  front() {
    if (!this.isEmpty()) {
      return this.data[0]
    }
    return -1;
  }
  back() {
    if (!this.isEmpty()) {
      return this.data[this.top - 1]
    }
    return -1
  }
}
const solution = (inputLines) => {
  let n = inputLines.shift();
  let deque = new Deque()
  let answer = ''
  for (let i = 0; i < n; i++) {
    let [command, item] = inputLines[i].split(' ');
    if (command === 'push_front') {
      deque.unshift(item);
    } else if (command === 'push_back') {
      deque.push(item);
    } else if (command === 'pop_front') {
      answer += deque.shift() + '\n';
    } else if (command === 'pop_back') {
      answer += deque.pop() + '\n';
    } else if (command === 'size') {
      answer += deque.length() + '\n';
    } else if (command === 'empty') {
      answer += deque.isEmpty() + '\n';
    } else if (command === 'front') {
      answer += deque.front() + '\n';
    } else if (command === 'back') {
      answer += deque.back() + '\n';
    }
  }
  return answer;
}
(function () {
  let inputLines = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");

  console.log(solution(inputLines));
})();