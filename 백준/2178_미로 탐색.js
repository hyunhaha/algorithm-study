const input = [];

const solution = input => {
  const [n, m] = input.shift().split(" ").map(Number);
  const [dx, dy] = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ];
  const visited = new Array(n).fill(0).map(e => new Array(m).fill(0));

  const arr = [];
  for (let i = 0; i < n; i++) {
    const temp = input[i].split("").map(Number);
    arr.push(temp);
  }

  const queue = [];
  queue.push([0, 0]);
  visited[0][0] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (arr[nx][ny] && !visited[nx][ny]) {
          visited[nx][ny] = visited[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
  console.log(visited[n - 1][m - 1]);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
