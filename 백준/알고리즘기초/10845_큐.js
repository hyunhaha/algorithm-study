class Queue {
  constructor() {
    this.data = [];
    this.top = 0;
    this.max = 10000;
  }
  push(e) {
    if (this.top < this.max) {
      this.data[this.top] = e;
      this.top += 1;
    }
  }
  isEmpty() {
    return this.top === 0 ? 1 : 0;
  }
  dequeue() {
    if (!this.isEmpty()) {
      this.top -= 1;
      return this.data.shift();
    }
    return -1
  }
  length() {
    return this.top;
  }
  front() {
    if (!this.isEmpty()) {
      return this.data[0];
    }
    return -1;
  }
  back() {
    if (!this.isEmpty()) {
      return this.data[this.top - 1];
    }
    return -1
  }
}
let queue = new Queue();
let solution = (inputLines) => {
  let n = inputLines.shift();
  let answer = '';
  for (let i = 0; i < n; i++) {
    let [command, item] = inputLines[i].split(' ');
    if (command === 'push') {
      queue.push(Number(item));
    } else if (command === 'pop') {
      answer += queue.dequeue() + '\n';
    } else if (command === 'size') {
      answer += queue.length() + '\n';
    } else if (command === 'empty') {
      answer += queue.isEmpty() + '\n';
    } else if (command === 'front') {
      answer += queue.front() + '\n';
    } else if (command === 'back') {
      answer += queue.back() + '\n';
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