const input = [];

const solution = input => {
  const [n, m, a, b, c] = input.shift().split(" ").map(Number);
  const map = new Array(n + 1).fill(0).map(e => []);

  for (let i = 0; i < input.length; i++) {
    const [p1, p2, w] = input[i].split(" ").map(Number);
    map[p1].push([p2, w]);
    map[p2].push([p1, w]);
  }

  const visited = new Array(n + 1).fill(0);
  let answer = Infinity;

  const dfs = (s, e, w, max) => {
    visited[s] = 1;
    if (s === e) {
      answer = Math.min(answer, max);
    }
    for (let item of map[s]) {
      const [next, nextW] = item;
      if (visited[next]) {
        continue;
      }
      if (nextW > w) {
        continue;
      }
      visited[next] = 1;
      dfs(next, e, w - nextW, Math.max(max, nextW));
      visited[next] = 0;
    }
  };

  dfs(a, b, c, 0);

  if (answer === Infinity) {
    console.log(-1);
  } else {
    console.log(answer);
  }
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
