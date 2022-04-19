const input = [];

const solution = input => {
  const n = Number(input.shift());
  const counts = input.shift().split(" ").map(Number);
  counts.unshift(0);
  const tree = new Array(n + 1).fill(0).map(e => []);
  const dp = new Array(n + 1).fill(0).map((e, i) => [0, counts[i]]);
  const visited = new Array(n + 1).fill(0);

  const dfs = cur => {
    visited[cur] = 1;
    for (let item of tree[cur]) {
      if (!visited[item]) {
        dfs(item);
        dp[cur][0] += Math.max(dp[item][0], dp[item][1]);
        dp[cur][1] += dp[item][0];
      }
    }
  };

  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    tree[a].push(b);
    tree[b].push(a);
  }

  dfs(1);
  console.log(Math.max(dp[1][0], dp[1][1]));
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });

// 너무 어려와..
