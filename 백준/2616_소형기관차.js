const input = [];

const solution = input => {
  const n = Number(input[0]);
  const m = Number(input[2]);
  const arr = input[1].split(" ").map(Number);

  const sum = Array(n + 1).fill(0);
  const dp = Array.from(Array(4), () => Array(n + 1).fill(0));
  for (let i = 1; i < n + 1; i++) {
    sum[i] = arr[i - 1] + sum[i - 1];
  }

  for (let i = 1; i < 4; i++) {
    for (let j = i * m; j < n + 1; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j - m] + sum[j] - sum[j - m]);
    }
  }

  return dp[3][n];
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    console.log(solution(input));
  });
