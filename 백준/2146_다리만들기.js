const input = [];

const solution = input => {
  let answer = Infinity;
  const n = Number(input.shift());
  const arr = [];
  const visited = Array.from(Array(n), () => Array(n).fill(false));
  for (let i = 0; i < n; i++) {
    const temp = input[i].split(" ").map(Number);
    arr.push(temp);
  }

  let count = 1;
  const [dx, dy] = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ];
  const bfs = (i, j) => {
    const q = [];
    q.push([i, j]);
    visited[i][j] = true;
    arr[i][j] = count;
    while (q.length > 0) {
      const [x, y] = q.shift();
      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] === 1 &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          arr[nx][ny] = count;
          q.push([nx, ny]);
        }
      }
    }
  };
  const bfs2 = number => {
    const d = Array.from(Array(n), () => Array(n).fill(-1));
    const q = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i][j] === number) {
          q.push([i, j]);
          d[i][j] = 0;
        }
      }
    }
    while (q.length > 0) {
      const [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
          continue;
        }
        if (arr[nx][ny] > 0 && arr[nx][ny] !== number) {
          answer = Math.min(answer, d[x][y]);
        }
        if (arr[nx][ny] === 0 && d[nx][ny] === -1) {
          d[nx][ny] = d[x][y] + 1;
          q.push([nx, ny]);
        }
      }
    }
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
        count += 1;
      }
    }
  }
  for (let i = 1; i < count; i++) {
    bfs2(i);
  }
  // console.log("arr", arr);
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
