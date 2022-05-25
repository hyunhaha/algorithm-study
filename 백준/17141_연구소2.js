const { start } = require("repl");

const getCombinations = function (arr, n) {
  const results = [];
  if (n === 1) return arr.map(e => [e]);
  arr.forEach((e, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombinations(rest, n - 1);
    const attached = combinations.map(combination => [e, ...combination]);
    results.push(...attached);
  });
  return results;
};

const input = [];

const solution = input => {
  const [n, m] = input.shift().split(" ").map(Number);

  let result = Infinity;

  const arr = [];
  const virus = [];
  let emptyCount = 0;
  for (let i = 0; i < n; i++) {
    const temp = input[i].split(" ").map(Number);
    arr.push(temp);
    for (let j = 0; j < n; j++) {
      if (temp[j] === 2) {
        virus.push([i, j]);
        emptyCount += 1;
      } else if (temp[j] === 0) {
        emptyCount += 1;
      }
    }
  }

  const [dr, dc] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];

  const bfs = (starts, remain) => {
    const visited = new Array(n).fill(0).map(e => new Array(n).fill(0));
    const q = [];
    for (let item of starts) {
      q.push(item);
      visited[item[0]][item[1]] = 1;
    }

    let result = 0;
    while (q.length > 0) {
      const [r, c] = q.shift();
      for (let i = 0; i < 4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];
        if (
          nr >= 0 &&
          nr < n &&
          nc >= 0 &&
          nc < n &&
          arr[nr][nc] !== 1 &&
          !visited[nr][nc]
        ) {
          visited[nr][nc] = visited[r][c] + 1;
          q.push([nr, nc]);
          remain -= 1;
        }
      }
      result = visited[r][c] - 1;
    }
    return [result, remain];
  };

  const combination = getCombinations(virus, m);
  for (let c of combination) {
    let r = emptyCount - m;
    const [bfsResult, remain] = bfs(c, r);
    r = remain;

    if (r === 0 && bfsResult < result) {
      result = bfsResult;
    }
  }

  if (result === Infinity) {
    console.log(-1);
  } else {
    console.log(result);
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
