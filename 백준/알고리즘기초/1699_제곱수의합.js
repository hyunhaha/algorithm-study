const solution = (input) => {
  const n = Number(input);
  let arr = new Array(n + 1).fill(0).map((e, i) => e = i);
  let dp = [0, 1];
  for (let i = 1; i <= n; i++) {//n이 32인 경우 
    dp[i] = dp[i - 1] + 1;

    for (let j = 1; j <= Math.sqrt(i); j++) {//가장 큰 제곱수 는 5가ㅏ 될 수 있다.
      if (dp[i] > dp[i - (j * j)] + 1) {//32-5*5=7 이므로 7을 표현하는 제곱수 항의 최소 갯수는 4이다 4에 5*5항을 더하므로 +1을 해준다
        // 1 + dp[7](5 ^ 5 + 7)
        // 1 + dp[16](4 ^ 4 + 16)
        // 1 + dp[23](3 ^ 3 + 23)
        // 1 + dp[28](2 ^ 2 + 28)
        // 1 + dp[31](1 ^ 1 + 31) 중에서 최소 값이 선택된다.
        dp[i] = dp[i - (j * j)] + 1
      }
    }
  }


  return dp[n]
}
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line))
  rl.close();

}).on("close", () => {
  process.exit();
});