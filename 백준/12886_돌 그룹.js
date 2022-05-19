const input = [];

const solution = input => {
  const [a, b, c] = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((x, y) => x - y);
  const visited = new Set([]);

  const dfs = () => {
    visited.add([a, b, c].join(""));
    const q = [[a, b, c]];

    while (q.length > 0) {
      const [x, y, z] = q.shift();

      if (x === y && y === z) {
        return true;
      }
      if (x < y) {
        const n = [x + x, y - x, z].sort((a, b) => a - b);
        const str = n.join("");
        if (!visited.has(str)) {
          visited.add(str);
          q.push(n);
        }
      }
      if (y < z) {
        const n = [x, y + y, z - y].sort((a, b) => a - b);
        const str = n.join("");
        if (!visited.has(str)) {
          visited.add(str);
          q.push(n);
        }
      }
      if (x < z) {
        const n = [x + x, y, z - x].sort((a, b) => a - b);
        const str = n.join("");
        if (!visited.has(str)) {
          visited.add(str);
          q.push(n);
        }
      }
    }
    return false;
  };
  if ((a + b + c) % 3 !== 0) {
    console.log(0);
    return;
  } else {
    console.log(dfs() ? 1 : 0);
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
