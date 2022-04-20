const input = [];

const solution = input => {
  let answer = 0;
  const [n, m] = input.shift().split(" ").map(Number);
  const visited = new Array(n).fill(0).map(e => new Array(m).fill(0));
  const parents = [];
  for (let i = 0; i < n; i++) {
    const temp = [];
    for (let j = 0; j < m; j++) {
      temp.push([i, j]);
    }
    parents.push(temp);
  }

  const findRoot = (y, x) => {
    if (parents[y][x][0] === y && parents[y][x][1] === x) {
      return [y, x];
    }
    parents[y][x] = findRoot(parents[y][x][0], parents[y][x][1]);
    return parents[y][x];
  };

  const union = (next, cur) => {
    const nextRoot = findRoot(...next);
    const curRoot = findRoot(...cur);
    parents[curRoot[0]][curRoot[1]] = nextRoot;
  };

  const dfs = (y, x) => {
    visited[y][x] = 1;
    let nx = x;
    let ny = y;
    if (input[y][x] === "U") {
      ny -= 1;
    } else if (input[y][x] === "D") {
      ny += 1;
    } else if (input[y][x] === "R") {
      nx += 1;
    } else if (input[y][x] === "L") {
      nx -= 1;
    }

    const root = findRoot(ny, nx);

    if (!visited[ny][nx]) {
      union([ny, nx], [y, x]);
      dfs(ny, nx);
    } else {
      if (root[0] === y && root[1] === x) {
        input[y][x] = "s";
        answer += 1;
        return;
      } else {
        union([ny, nx], [y, x]);
        return;
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j]) {
        continue;
      }
      dfs(i, j);
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
