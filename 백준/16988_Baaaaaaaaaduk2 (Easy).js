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
  const map = [];
  const empty = [];
  for (let i = 0; i < n; i++) {
    const temp = input[i].split(" ").map(Number);
    map.push(temp);
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 0) {
        empty.push([i, j]);
      }
    }
  }

  const [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];

  const bfs = (i, j, v) => {
    const q = [];
    q.push([i, j]);
    v[i][j] = true;
    let count = 1;
    let flag = true;
    while (q.length > 0) {
      const [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (map[nx][ny] === 0) {
            flag = false;
          } else if (map[nx][ny] === 2 && !v[nx][ny]) {
            v[nx][ny] = true;
            count += 1;
            q.push([nx, ny]);
          }
        }
      }
    }
    return flag ? count : 0;
  };

  const putStone = pos => {
    for (let [i, j] of pos) {
      map[i][j] = 1;
    }
  };

  const initStone = pos => {
    for (let [i, j] of pos) {
      map[i][j] = 0;
    }
  };

  const play = pos => {
    putStone(pos);

    const v = new Array(n).fill(0).map(e => new Array(m).fill(false));
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (map[i][j] === 2 && !v[i][j]) {
          count += bfs(i, j, v);
        }
      }
    }

    initStone(pos);
    return count;
  };

  const combinations = getCombinations(
    new Array(empty.length).fill(0).map((e, i) => i),
    2
  );

  let resultMax = 0;
  for (let i = 0; i < combinations.length; i++) {
    const [a, b] = combinations[i];
    resultMax = Math.max(resultMax, play([empty[a], empty[b]]));
  }
  console.log(resultMax);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
