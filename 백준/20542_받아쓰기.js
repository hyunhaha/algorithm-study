const input = [];
const solution = input => {
  const [n, m] = input[0].split(" ").map(Number);
  const a = input[1];
  const b = input[2];
  const dp = new Array(n + 1).fill(0).map((e, i) => {
    const temp = new Array(m + 1).fill(0);
    temp[0] = i;
    return temp;
  });
  dp[0] = new Array(m + 1).fill(0).map((e, i) => i);

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      if (
        a[i - 1] === b[j - 1] ||
        (a[i - 1] === "v" && b[j - 1] === "w") ||
        (a[i - 1] === "i" && ["j", "l"].includes(b[j - 1]))
      ) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  console.log(dp[n][m]);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
