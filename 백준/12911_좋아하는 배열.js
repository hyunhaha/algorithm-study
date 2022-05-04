const input = [];

const solution = input => {
  const [n, k] = input[0].split(" ").map(Number);
  const arr = new Array(11).fill(0).map(e => new Array(k + 1).fill(0));
  const sum = new Array(11).fill(0);
  const m = 1000000007;
  for (let i = 0; i <= k; i++) {
    arr[1][i] = 1;
  }
  sum[1] = k;
  for (let i = 2; i <= n; i++) {
    sum[i - 1] += m;
    for (let j = 1; j <= k; j++) {
      let temp = 0;
      for (let h = j + j; h <= k; h += j) {
        temp += arr[i - 1][h];
        temp %= m;
      }
      arr[i][j] = sum[i - 1] - temp;
      arr[i][j] %= m;
      sum[i] += arr[i][j];
      sum[i] %= m;
    }
  }
  console.log(sum[n]);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
