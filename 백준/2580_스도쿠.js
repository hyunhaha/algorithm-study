const input = [];

const solution = input => {
  const map = [];
  for (let i = 0; i < input.length; i++) {
    const temp = input[i].split(" ").map(Number);
    map.push(temp);
  }

  const blank = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 0) {
        blank.push([i, j]);
      }
    }
  }

  const row = (x, target) => {
    for (let i = 0; i < 9; i++) {
      if (map[x][i] === target) {
        return false;
      }
    }
    return true;
  };

  const col = (y, target) => {
    for (let i = 0; i < 9; i++) {
      if (map[i][y] === target) {
        return false;
      }
    }
    return true;
  };

  const rect = (x, y, target) => {
    const rx = parseInt(x / 3) * 3;
    const ry = parseInt(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (map[rx + i][ry + j] === target) {
          return false;
        }
      }
    }
    return true;
  };

  let getAnswer = false;
  const dfs = count => {
    if (getAnswer) {
      return;
    }
    if (count === blank.length) {
      for (let i = 0; i < 9; i++) {
        console.log(map[i].join(" "));
      }
      getAnswer = true;
      return;
    }
    const [x, y] = blank[count];
    for (let i = 1; i < 10; i++) {
      if (col(y, i) && row(x, i) && rect(x, y, i)) {
        map[x][y] = i;
        dfs(count + 1);
        map[x][y] = 0;
      }
    }
  };

  dfs(0);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
