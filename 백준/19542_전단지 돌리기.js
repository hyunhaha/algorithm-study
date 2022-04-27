const input = [];

const solution = input => {
  const [n, s, d] = input.shift().split(" ").map(Number);
  const map = new Array(n + 1).fill(0).map(e => []);
  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    map[a].push(b);
    map[b].push(a);
  }
  let answer = 0;
  const dfs = (cur, prev) => {
    let max = 0;
    for (let next of map[cur]) {
      if (next !== prev) {
        max = Math.max(max, dfs(next, cur));
      }
    }
    if (max >= d) {
      answer += 1;
    }
    return max + 1;
  };

  dfs(s, 0);
  console.log(answer > 0 ? (answer - 1) * 2 : 0);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
