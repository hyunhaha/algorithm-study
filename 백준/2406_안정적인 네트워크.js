class MinHeap {
  constructor() {
    this.heap = [null];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heapPush(value) {
    this.heap.push(value);
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);
    while (
      currentIdx > 1 &&
      this.arrCompare(this.heap[currentIdx], this.heap[parentIdx])
    ) {
      this.swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  heapPop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let currentIdx = 1;
    let leftIdx = currentIdx * 2;
    let rightIdx = currentIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.arrCompare(this.heap[leftIdx], this.heap[currentIdx])) {
        this.swap(leftIdx, currentIdx);
      }
      return min;
    }
    while (
      this.heap[leftIdx] !== undefined &&
      this.heap[rightIdx] !== undefined &&
      (this.arrCompare(this.heap[leftIdx], this.heap[currentIdx]) ||
        this.arrCompare(this.heap[rightIdx], this.heap[currentIdx]))
    ) {
      const minIdx = this.arrCompare(this.heap[leftIdx], this.heap[rightIdx])
        ? leftIdx
        : rightIdx;
      this.swap(minIdx, currentIdx);
      currentIdx = minIdx;
      leftIdx = currentIdx * 2;
      rightIdx = currentIdx * 2 + 1;
    }
    return min;
  }

  arrCompare(left, right) {
    if (left[0] > right[0]) {
      return false;
    } else if (left[0] < right[0]) {
      return true;
    } else {
      if (left[1] > right[1]) {
        return false;
      } else if (left[1] < right[1]) {
        return true;
      } else {
        if (left[2] >= right[2]) {
          return false;
        } else if (left[2] < right[2]) {
          return true;
        }
      }
    }
  }
}

const input = [];

const solution = input => {
  const [n, m] = input.shift().split(" ").map(Number);

  const p = new Array(n + 1).fill(0).map((e, i) => i);
  const findRoot = n => {
    if (p[n] === n) {
      return n;
    } else {
      p[n] = findRoot(p[n]);
      return p[n];
    }
  };

  const union = (n1, n2) => {
    const root1 = findRoot(n1);
    const root2 = findRoot(n2);
    if (root1 === root2) return false;
    else {
      p[root2] = root1;
      return true;
    }
  };

  for (let i = 0; i < m; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    union(x, y);
  }

  const heap = new MinHeap();
  const temp = [];
  for (let i = m; i < m + n; i++) {
    const t = input[i].split(" ").map(Number);
    temp.push(t);
  }

  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      heap.heapPush([temp[i][j], i + 1, j + 1]);
    }
  }

  let result = 0;
  let count = 0;
  const resultArr = [];
  while (heap.heap.length > 1) {
    const [c, a, b] = heap.heapPop();
    if (union(a, b)) {
      result += c;
      count += 1;
      resultArr.push([b, a]);
      if (count === n - 1) break;
    }
  }
  console.log(result, resultArr.length);

  for (let [f, s] of resultArr) {
    console.log(f, s);
  }
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
