class MinHeap {
  constructor() {
    this.heap = [null];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(value) {
    this.heap.push(value);
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);
    while (currentIdx > 1 && this.heap[parentIdx] > this.heap[currentIdx]) {
      this.swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  heappop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let currentIdx = 1;
    let leftIdx = currentIdx * 2;
    let rightIdx = currentIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[currentIdx]) {
        this.swap(leftIdx, currentIdx);
      }
      return min;
    }

    while (
      this.heap[leftIdx] < this.heap[currentIdx] ||
      this.heap[rightIdx] < this.heap[currentIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, currentIdx);
      currentIdx = minIdx;
      leftIdx = currentIdx * 2;
      rightIdx = currentIdx * 2 + 1;
    }

    return min;
  }
}
const solution = input => {
  const n = Number(input.shift());
  const time = input
    .map(e => e.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);

  const heap = new MinHeap();
  heap.heappush(time[0][1]);

  for (let i = 1; i < n; i++) {
    const [start, end] = time[i];
    if (heap.heap[1] > start) {
      heap.heappush(end);
    } else {
      heap.heappop();
      heap.heappush(end);
    }
  }
  return heap.heap.length - 1;
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    console.log(solution(input));
  });
