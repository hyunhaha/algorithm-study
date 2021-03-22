
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
    return -1;
  }
}
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let stack = new Stack();
let answer = ''
const solution = (line) => {

  let words = line.split(' ');
  answer += words.map(word => {
    let reversed = []
    word.split('').map(e => {
      stack.push(e);
    })
    while (!stack.isEmpty()) {
      reversed.push(stack.pop());
    }
    return reversed.join('')
  }).join(' ') + '\n';
}


let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input.splice(0, 1);

  input.map((line) => {
    solution(line);
  });

  console.log(answer);
  process.exit();
});