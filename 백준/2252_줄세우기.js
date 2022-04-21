//답이 여러 가지인 경우에는 아무거나 출력한다.

const input = [];

const solution = input => {
  const [n, m] = input.shift().split(" ").map(Number);
  const g = new Array(n + 1).fill(0).map(e => []); //나가는 방향 기록
  const d = new Array(n + 1).fill(0); //들어오는 정점의 갯수
  const q = [];
  const answer = [];
  for (let i = 0; i < m; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    g[a].push(b);
    d[b] += 1;
  }

  for (let i = 1; i < n + 1; i++) {
    if (d[i] === 0) {
      q.push(i);
    }
  }
  while (q.length > 0) {
    const s = q.shift();

    answer.push(s);
    for (let item of g[s]) {
      d[item] -= 1;
      if (d[item] === 0) {
        q.push(item);
      }
    }
  }
  console.log(answer.join(" "));
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
