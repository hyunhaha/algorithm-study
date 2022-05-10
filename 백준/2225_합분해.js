const input = [];

const solution = input => {
  const [n, k] = input[0].split(" ").map(Number);
  const arr = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
  arr[0][0] = 1;
  for (let i = 0; i <= k; i++) {
    for (let j = 0; j <= n; j++) {
      for (let a = 0; a <= j; a++) {
        if (i - 1 >= 0) {
          arr[i][j] += arr[i - 1][j - a];
          arr[i][j] %= 1000000000;
        }
      }
    }
  }
  console.log(arr[k][n]);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
