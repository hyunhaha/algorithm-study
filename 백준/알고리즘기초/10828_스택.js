class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  _top() {
    if (!this.isEmpty()) {
      return this.data[this.top - 1];
    }

    return -1;
  }

  push(element) {
    this.data[this.top] = element;
    this.top += 1;
  }

  length() {
    return this.top;
  }

  peek() {
    return this.data[this.top - 1];
  }

  isEmpty() {
    return this.top === 0 ? 1 : 0;
  }

  pop() {
    if (!this.isEmpty()) {
      this.top = this.top - 1;
      return this.data.splice(-1)[0];
    }

    return -1;
  }

  print() {
    this.data.map((element) => {
      console.log(element);
    });
  }

  reverse() {
    this._reverse(0);
  }

  // private method
  _reverse(index) {
    if (index < this.top - 1) {
      this._reverse(index + 1);
    }
    console.log(this.data[index]);
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let stack = new Stack();
let answer = '';

const stackCLI = (line) => {
  let [command, element] = line.split(' ');

  if (command === 'push') {
    stack.push(+element);
  } else if (command === 'pop') {
    answer += stack.pop() + '\n';
  } else if (command === 'top') {
    answer += stack._top() + '\n';
  } else if (command === 'size') {
    answer += stack.length() + '\n';
  } else if (command === 'empty') {
    answer += stack.isEmpty() + '\n';
  }
};

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input.map((line) => {
    stackCLI(line);
  });

  console.log(answer);
  process.exit();
});