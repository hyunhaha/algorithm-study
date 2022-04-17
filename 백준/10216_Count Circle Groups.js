const input = [];

const solution = input => {
  const testCase = Number(input.shift());
  let k = 0;
  let parents;
  let number;
  const findRoot = n => {
    if (parents[n] === n) {
      return n;
    } else {
      parents[n] = findRoot(parents[n]);
      return parents[n];
    }
  };
  const union = (n1, n2) => {
    const root1 = findRoot(n1);
    const root2 = findRoot(n2);
    if (root1 !== root2) {
      if (number[root1] > number[root2]) {
        parents[root2] = root1;
      } else {
        parents[root1] = root2;
        if (number[root1] === number[root2]) {
          number[root2] += 1;
        }
      }
    }
  };
  while (k < input.length) {
    const n = Number(input[k]);
    const arr = Array.from(Array(n), () => Array(3).fill(0));
    number = new Array(n).fill(0);
    parents = new Array(n).fill(0).map((e, i) => i);
    for (let i = 1; i < n + 1; i++) {
      const [x, y, r] = input[k + i].split(" ").map(Number);
      arr[i - 1][0] = x;
      arr[i - 1][1] = y;
      arr[i - 1][2] = r;
    }
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const xl = arr[i][0] - arr[j][0];
        const yl = arr[i][1] - arr[j][1];
        const rl = arr[i][2] + arr[j][2];
        const d = xl * xl + yl * yl;
        if (rl * rl >= d) {
          if (findRoot(i) !== findRoot(j)) {
            union(i, j);
          }
        }
      }
    }
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(findRoot(parents[i]));
    }
    const set = new Set(result);
    console.log(set.size);
    k += n + 1;
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
