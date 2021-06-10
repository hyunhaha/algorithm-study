const solution = (input) => {
  const n = Number(input);
  let arr = new Array(n + 1).fill(0).map((e, i) => e = i);
  let dp = [0, 1];
  console.log(arr);
  for (let i = 1; i < n; i++) {
    dp[i] = dp[i - 1] + 1;
    console.log(dp)
    for (let j = 1; j <= Math.sqrt(i); j++) {
      console.log(i, j)
      console.log('i - j * 2 = ', i - j ** 2)
      console.log(`dp[${i - j ** 2}], ${dp[i - j ** 2]}`)
      // dp[i] += dp[i - (j ** 2)]
    }

  }
  console.log(dp)



}
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  solution(line)
  rl.close();

}).on("close", () => {
  process.exit();
});