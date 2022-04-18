const input = [];

const solution = input => {
  const [n, m] = input.shift().split(" ").map(Number);
  const p = new Array(m + 1).fill(0).map((e, i) => i);
  const [dx, dy] = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ];

  const arr = [];

  const bfs = (a, b) => {
    const q = [a];
    const visited = Array.from(Array(n), () => new Array(n).fill(0));

    while (q.length > 0) {
      const [y, x] = q.shift();
      if (x === b[1] && y === b[0]) {
        return visited[y][x];
      }
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          visited[ny][nx] === 0 &&
          input[ny][nx] !== "1"
        ) {
          // console.log(nx, ny);
          visited[ny][nx] = visited[y][x] + 1;
          // console.log(visited);
          q.push([ny, nx]);
        }
      }
    }
    // console.log(visited);
    return -1;
  };
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
    if (root1 > root2) {
      p[root1] = root2;
    } else {
      p[root2] = root1;
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (input[i][j] === "S" || input[i][j] === "K") {
        arr.push([i, j]);
      }
    }
  }

  const edge = [];
  for (let i = 0; i < m + 1; i++) {
    for (let j = i + 1; j < m + 1; j++) {
      const d = bfs(arr[i], arr[j]);
      // console.log("d", d);
      if (d === -1) {
        console.log(-1);
        return;
      }
      edge.push([d, i, j]);
    }
  }
  edge.sort((a, b) => a[0] - b[0]);

  let count = 0;
  let answer = 0;

  for (let i = 0; i < edge.length; i++) {
    const [d, n1, n2] = edge[i];
    if (findRoot(n1) !== findRoot(n2)) {
      union(n1, n2);
      count += 1;
      answer += d;
    }
    if (count === m) {
      break;
    }
  }

  console.log(answer);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
