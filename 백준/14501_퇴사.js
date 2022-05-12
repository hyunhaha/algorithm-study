const input = [];

const solution = input => {
  const n = Number(input.shift());
  const time = [];
  const pay = [];
  const dp = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    const [t, p] = input[i].split(" ").map(Number);
    time.push(t);
    pay.push(p);
  }
  for (let i = n - 1; i >= 0; i--) {
    if (time[i] + i > n) {
      dp[i] = dp[i + 1];
    } else {
      dp[i] = Math.max(dp[i + 1], pay[i] + dp[i + time[i]]);
    }
  }
  console.log(dp[0]);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
