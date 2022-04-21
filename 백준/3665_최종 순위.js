const input = [];

const solution = input => {
  const testCase = Number(input.shift());
  let k = 0;

  const getResult = (n, team, changeN, arr) => {
    const g = new Array(n + 1).fill(0).map(e => []);
    const d = new Array(n + 1).fill(0);
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        g[team[i]].push(team[j]);
        d[team[j]] += 1;
      }
    }
    for (let i = 0; i < changeN; i++) {
      const [a, b] = arr[i];
      if (g[a].includes(b)) {
        g[a].splice(g[a].indexOf(b), 1);
        g[b].push(a);
        d[b] -= 1;
        d[a] += 1;
      } else {
        g[b].splice(g[b].indexOf(a), 1);
        g[a].push(b);
        d[a] -= 1;
        d[b] += 1;
      }
    }

    const q = [];
    for (let i = 1; i < n + 1; i++) {
      if (d[i] === 0) {
        q.push(i);
      }
    }
    if (q.length === 0) {
      return "IMPOSSIBLE";
    }

    const answer = [];
    while (q.length > 0) {
      const item = q.shift();
      answer.push(item);
      for (let i of g[item]) {
        d[i] -= 1;
        if (d[i] === 0) {
          q.push(i);
        }
      }
    }
    const s = d.reduce((acc, e) => (acc += e), 0);
    if (s > 0) {
      return "IMPOSSIBLE";
    }
    return answer.join(" ");
  };

  while (k < input.length) {
    const n = Number(input[k]);
    const team = input[k + 1].split(" ").map(Number);
    const changeN = Number(input[k + 2]);
    const changeArr = [];
    for (let i = k + 3; i < k + 3 + changeN; i++) {
      changeArr.push(input[i].split(" ").map(Number));
    }
    const result = getResult(n, team, changeN, changeArr);
    console.log(result);
    k += 3 + changeN;
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
