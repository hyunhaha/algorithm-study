const input = [];
const permutation = (arr, num) => {
  let result = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permutationArr = permutation(restArr, num - 1);
    const combineFixer = permutationArr.map(v => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
};
const solution = input => {
  let result = Infinity;

  const map = [];
  let temp = [];
  let c = 0;
  for (let i = 0; i < input.length; i++) {
    if (c === 5) {
      map.push(temp);
      temp = [];
      c = 0;
    }
    temp.push(input[i].split(" ").map(Number));
    c += 1;
  }
  map.push(temp);

  let cube = new Array(5).fill(0).map(e => []);
  const [dz, dy, dx] = [
    [0, 0, 0, 0, 1, -1],
    [0, 0, 1, -1, 0, 0],
    [1, -1, 0, 0, 0, 0],
  ];

  const rotate = board => {
    const newBoard = new Array(5).fill(0).map(e => [new Array(5).fill(0)]);
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        newBoard[j][4 - i] = board[i][j];
      }
    }
    return newBoard;
  };

  const checkRange = (z, y, x) => {
    if (z >= 0 && z < 5 && y >= 0 && y < 5 && x >= 0 && x < 5) {
      return true;
    }
    return false;
  };

  let flag = 0;
  const bfs = () => {
    const visited = new Array(5)
      .fill(0)
      .map(e => new Array(5).fill(0).map(e => new Array(5).fill(0)));
    const q = [[0, 0, 0]];
    while (q.length > 0) {
      const [z, y, x] = q.shift();
      if (z === 4 && y === 4 && x === 4) {
        result = Math.min(result, visited[4][4][4]);
        if (result === 12) {
          flag = 1;
          return;
        }
      }
      for (let i = 0; i < 6; i++) {
        const nz = z + dz[i];
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (checkRange(nz, ny, nx)) {
          if (cube[nz][ny][nx] === 1 && !visited[nz][ny][nx]) {
            q.push([nz, ny, nx]);
            visited[nz][ny][nx] = visited[z][y][x] + 1;
          }
        }
      }
    }
  };

  const dfs = count => {
    if (count === 5) {
      if (cube[4][4][4] === 1) {
        bfs();
      }
      return;
    }
    for (let i = 0; i < 4; i++) {
      if (cube[0][0][0] === 1) {
        dfs(count + 1);
      }
      cube[count] = rotate(cube[count]);
    }
  };

  const permutationResult = permutation([0, 1, 2, 3, 4], 5);
  for (let orderList of permutationResult) {
    for (let i = 0; i < 5; i++) {
      cube[i] = map[orderList[i]];
    }
    dfs(0);
    if (flag) {
      break;
    }
  }

  if (result === Infinity) {
    console.log(-1);
  } else {
    console.log(result);
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
