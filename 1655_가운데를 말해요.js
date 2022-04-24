class Heap {
  constructor() {
    this.items = [];
  }
  swap(index1, index2) {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return index * 2 + 1;
  }
  rightChildIndex(index) {
    return index * 2 + 2;
  }

  parent(index) {
    return this.items[this.parentIndex(index)];
  }
  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }
  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  peek() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}
class MinHeap extends Heap {
  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index) > this.items[index]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;
    while (
      this.leftChild(index) !== undefined &&
      (this.leftChild(index) < this.items[index] ||
        this.rightChild(index) < this.items[index])
    ) {
      let smallerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index) < this.items[smallerIndex]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }
      this.swap(index, smallerIndex);
      index = smallerIndex;
    }
  }

  push(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }

  pop() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }
}

const solution = input => {
  const n = Number(input.shift());
  const right = new MinHeap();
  const left = new MinHeap();
  const arr = input.map(Number);
  const answer = [];
  for (let i = 0; i < n; i++) {
    if (right.size() === left.size()) {
      left.push(-1 * arr[i]);
    } else {
      right.push(arr[i]);
    }
    if (
      right.size() > 0 &&
      left.size() > 0 &&
      right.items[0] < -1 * left.items[0]
    ) {
      const l = -1 * left.pop();
      const r = -1 * right.pop();
      right.push(l);
      left.push(r);
    }
    answer.push(-1 * left.items[0]);
  }
  console.log(answer.join("\n"));
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
