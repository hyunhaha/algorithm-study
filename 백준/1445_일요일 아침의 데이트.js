const input = [];

const solution = input => {
  const [n, m] = input.shift().split(" ").map(Number);
  const arr = [];
  const gArr = [];
  const [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];

  const checkRange = (x, y) => {
    if (x >= 0 && x < n && y >= 0 && y < m) {
      return true;
    }
    return false;
  };

  let si = 0;
  let sj = 0;
  for (let i = 0; i < n; i++) {
    arr.push(input[i].split(""));
    for (let j = 0; j < m; j++) {
      if (input[i][j] === "S") {
        si = i;
        sj = j;
      } else if (input[i][j] === "g") {
        gArr.push([i, j]);
      }
    }
  }

  for (let [i, j] of gArr) {
    for (let k = 0; k < 4; k++) {
      const nx = i + dx[k];
      const ny = j + dy[k];
      if (checkRange(nx, ny) && arr[nx][ny] === ".") {
        arr[nx][ny] = "#";
      }
    }
  }

  const q = [[0, 0, si, sj]];
  const visited = new Array(n).fill(0).map(e => new Array(m).fill(0));
  visited[si][sj] = 1;
  while (q.length > 0) {
    const [throughG, passG, x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (checkRange(nx, ny) && !visited[nx][ny]) {
        visited[nx][ny] = 1;
        if (arr[nx][ny] === ".") {
          q.push([throughG, passG, nx, ny]);
        } else if (arr[nx][ny] === "g") {
          q.push([throughG + 1, passG, nx, ny]);
        } else if (arr[nx][ny] === "#") {
          q.push([throughG, passG + 1, nx, ny]);
        } else if (arr[nx][ny] === "F") {
          console.log(throughG, passG);
          return;
        }
      }
      q.sort((a, b) => {
        if (a[0] === b[0]) {
          return a[1] - b[1];
        } else {
          return a[0] - b[0];
        }
      });
    }
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
