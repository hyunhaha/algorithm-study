const solution = (inputLines) => {
  let [n, k] = inputLines.split(' ').map(e => Number(e));
  let arr = new Array(n).fill(0).map((e, i) => i + 1);
  let answer = [];
  let idx = 0;
  while (arr.length !== 0) {
    idx += k - 1;
    idx %= arr.length;
    answer.push(arr.splice(idx, 1)[0])
  }
  return '<' + answer.join(', ') + '>';

}
(function () {
  let inputLines = require("fs").readFileSync("/dev/stdin").toString();
  console.log(solution(inputLines));
})();

////////////////////////////////
const solution = (inputLines) => {
  let [n, k] = inputLines.split(' ').map(e => Number(e));
  let arr = new Array(n).fill(0).map((e, i) => i + 1);
  let answer = [];
  let idx = 0;
  while (arr.length !== 0) {
    for (let i = 0; i < k - 1; i++) {
      arr.push(arr.shift());
    }
    answer.push(arr.shift());
  }
  return '<' + answer.join(', ') + '>';

}
(function () {
  let inputLines = require("fs").readFileSync("/dev/stdin").toString();
  console.log(solution(inputLines));
})();
/////////////////////////////////////
class Queue {
  constructor() {
    this.data = [];
    this.top = 0;
    this.max = 10000;
  }
  push(e) {
    if (this.top < this.max) {
      this.data[this.top] = e;
      this.top += 1
    }
  }
  isEmpty() {
    return this.top === 0 ? 1 : 0
  }
  dequeue() {
    if (!this.isEmpty()) {
      this.top -= 1;
      return this.data.shift();
    }
    return false
  }
}
const solution = (inputLines) => {
  let [n, k] = inputLines.split(' ').map(e => Number(e));
  let queue = new Queue;
  let answer = [];
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }
  while (!queue.isEmpty()) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.dequeue());
    }
    answer.push(queue.dequeue())
  }
  return '<' + answer.join(', ') + '>';
}

(function () {
  let inputLines = require("fs").readFileSync("/dev/stdin").toString();

  console.log(solution(inputLines));
})();