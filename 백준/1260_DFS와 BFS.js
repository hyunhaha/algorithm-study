const input = [];
let graph = [];
let visited, result;

const solution = input => {
  const [N, M, V] = input
    .shift()
    .split(" ")
    .map(e => Number(e));

  graph = Array.from(Array(N + 1), () => []);
  visited = new Array(N + 1).fill(false);

  input.forEach(str => {
    const [a, b] = str.split(" ").map(e => Number(e));
    graph[a].push(b);
    graph[b].push(a);
  });
  graph = graph.map(e => e.sort((a, b) => a - b));
  result = [];
  dfs(V);
  console.log(result.join(" "));

  visited.fill(false);
  result = [];
  bfs(V);
  console.log(result.join(" "));
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });

const dfs = v => {
  if (visited[v]) {
    return;
  }

  visited[v] = true;
  result.push(v);
  graph[v].forEach(e => {
    if (!visited[e]) {
      dfs(e);
    }
  });
};

const bfs = v => {
  const queue = [v];
  let point;
  while (queue.length !== 0) {
    point = queue.shift();
    if (visited[point]) {
      continue;
    }

    visited[point] = true;
    result.push(point);
    graph[point].forEach(e => {
      if (!visited[e]) {
        queue.push(e);
      }
    });
  }
};
