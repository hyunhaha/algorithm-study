const input = [];

const solution = input => {
  const [m, n] = input.shift().split(" ").map(Number);
  const map = [];
  for (let i = 0; i < m; i++) {
    const temp = input[i].split(" ").map(Number);
    map.push(temp);
  }
  const dp = new Array(m).fill(0).map(e => new Array(n).fill(-1));

  const [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];

  const checkRange = (x, y) => {
    if (x >= 0 && x < m && y >= 0 && y < n) {
      return true;
    }
    return false;
  };

  const dfs = (i, j) => {
    if (i === m - 1 && j === n - 1) {
      return 1;
    }
    if (dp[i][j] !== -1) {
      return dp[i][j];
    }
    let sum = 0;
    for (let k = 0; k < 4; k++) {
      const ni = i + dx[k];
      const nj = j + dy[k];
      if (checkRange(ni, nj)) {
        if (map[ni][nj] < map[i][j]) {
          sum += dfs(ni, nj);
        }
      }
    }
    dp[i][j] = sum;
    console.log(dp);
    return sum;
  };
  console.log(dp);
  console.log(dfs(0, 0));
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
