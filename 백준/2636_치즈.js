const input = [];

const solution = input => {
  const [n, m] = input.shift().split(" ").map(Number);
  const map = [];
  for (let i = 0; i < n; i++) {
    const temp = input[i].split(" ").map(Number);
    map.push(temp);
  }

  const [dx, dy] = [
    [1, 0, -1, 0],
    [0, 1, 0, -1],
  ];

  const queue = [];
  const bfs = () => {
    const visited = new Array(n).fill(0).map(e => new Array(m).fill(0));
    queue.push([0, 0]);
    let count = 0;
    while (queue.length > 0) {
      const [y, x] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (ny >= 0 && ny < n && nx >= 0 && nx < m && !visited[ny][nx]) {
          visited[ny][nx] = 1;
          if (map[ny][nx] === 0) {
            queue.push([ny, nx]);
          } else if (map[ny][nx] === 1) {
            map[ny][nx] = 0;
            count += 1;
          }
        }
      }
    }
    return count;
  };

  let time = 0;
  const timeLine = [];
  while (true) {
    time += 1;
    const result = bfs();
    if (result === 0) {
      break;
    } else {
      timeLine.push(result);
    }
  }

  console.log(time - 1);
  console.log(timeLine[timeLine.length - 1]);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
