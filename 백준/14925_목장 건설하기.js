const input = [];

const solution = input => {
  const [m, n] = input.shift().split(" ").map(Number);
  const arr = [];
  for (let i = 0; i < m; i++) {
    const temp = input[i].split(" ").map(Number);
    arr.push(temp);
  }

  const dp = new Array(m).fill(0).map(e => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    if (arr[i][0] === 0) {
      dp[i][0] = 1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[0][i] === 0) {
      dp[0][i] = 1;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (arr[i][j] === 0) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      }
    }
  }
  let answer = 0;
  for (let i = 0; i < m; i++) {
    answer = Math.max(answer, Math.max(...dp[i]));
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
