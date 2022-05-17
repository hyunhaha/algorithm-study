const input = [];

const solution = input => {
  const [n, m] = input[0].split(" ").map(Number);
  const [s, e] = input[input.length - 1].split(" ").map(Number);
  const arr = new Array(n + 1).fill(0).map(e => []);

  for (let i = 1; i < m + 1; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    arr[a].push(b);
    arr[b].push(a);
  }

  for (let i = 1; i < n + 1; i++) {
    arr[i].sort((a, b) => a - b);
  }

  const bfs = (start, end, v, count) => {
    const q = [[start, count]];
    while (q.length > 0) {
      const [cur, cnt] = q.pop();
      if (cur === end) {
        if (count === 0) {
          break;
        } else {
          return cnt;
        }
      }
      for (let next of arr[cur]) {
        if (v[next] === -1) {
          v[next] = cur;
          q.unshift([next, cnt + 1]);
        }
      }
    }
    const path = [end];
    let n = v[end];
    while (n !== 0) {
      path.push(n);
      n = v[n];
    }
    path.pop();
    return path;
  };

  let visited = new Array(n + 1).fill(-1);
  visited[s] = 0;
  let path = bfs(s, e, visited, 0);
  visited = new Array(n + 1).fill(-1);
  for (let idx of path) {
    visited[idx] = 1;
  }
  let count = bfs(e, s, visited, path.length);
  console.log(count);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
