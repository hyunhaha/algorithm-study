const input = [];

const solution = input => {
  const [n, k] = input.shift().split(" ").map(Number);
  const map = Array.from(Array(n + 1), () => Array(k + 1).fill(0));
  const arr = [[0, 0]];
  for (let i = 0; i < n; i++) {
    const [w, v] = input[i].split(" ").map(Number);
    arr.push([w, v]);
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      const w = arr[i][0];
      const v = arr[i][1];

      if (w > j) {
        map[i][j] = map[i - 1][j];
      } else {
        map[i][j] = Math.max(v + map[i - 1][j - w], map[i - 1][j]);
      }
    }
  }
  console.log(map[n][k]);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
