const input = [];

const solution = input => {
  const [n, m] = input.shift().split(" ").map(Number);
  const gender = input.shift().split(" ");
  const q = [];
  for (let i = 0; i < m; i++) {
    const [u, v, d] = input[i].split(" ").map(Number);
    q.push([u, v, d]);
  }

  q.sort((a, b) => a[2] - b[2]);

  const parents = new Array(n + 1).fill(0).map((e, idx) => idx);

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
    if (root1 < root2) {
      parents[root2] = root1;
    } else {
      parents[root2] = root1;
    }
  };

  let total = 0;
  let count = 0;
  for (let i = 0; i < q.length; i++) {
    const [n1, n2, d] = q[i];
    if (findRoot(n1) !== findRoot(n2) && gender[n1 - 1] !== gender[n2 - 1]) {
      union(n1, n2);
      total += d;
      count += 1;
      if (count === n - 1) break;
    }
  }

  if (count === n - 1) {
    console.log(total);
  } else {
    console.log(-1);
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
