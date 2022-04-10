const input = [];

const solution = input => {
  const [m, n] = input.shift().split(" ").map(Number);
  const arr = [];
  let queue = [];
  const visited = new Array(n).fill(0).map(e => new Array(m).fill(0));
  const [dx, dy] = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ];
  for (let i = 0; i < input.length; i++) {
    arr.push(input[i].split(" ").map(Number));
  }
  let tomatoCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) {
        queue.push([i, j]);
        visited[i][j] = 1;
      }
      if (arr[i][j] === 0 || arr[i][j] === 1) {
        tomatoCount += 1;
      }
    }
  }
  let max = 0;
  while (queue.length) {
    const tomato = [...queue];
    queue = [];
    for (let i = 0; i < tomato.length; i++) {
      const [x, y] = tomato[i];
      tomatoCount -= 1;
      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (arr[nx][ny] === 0 && !visited[nx][ny]) {
            visited[nx][ny] = visited[x][y] + 1;
            max = Math.max(max, visited[nx][ny]);
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
  if (tomatoCount !== 0) {
    console.log(-1);
  } else if (max === 0) {
    console.log(0);
  } else {
    console.log(max - 1);
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
