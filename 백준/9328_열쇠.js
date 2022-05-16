const input = [];

const solution = input => {
  const testCase = Number(input.shift());
  let i = 0;
  while (i < input.length) {
    const [h, w] = input[i].split(" ").map(Number);
    const arr = [];
    for (let j = i + 1; j < i + h + 1; j++) {
      arr.push(input[j].split(""));
    }
    const key = input[i + h + 1].split("");
    const door = new Array(26).fill(0);
    for (let k of key) {
      if (k !== "0") {
        door[k.charCodeAt(0) - "a".charCodeAt(0)] = 1;
      }
    }

    for (let n = 0; n < h; n++) {
      for (let m = 0; m < w; m++) {
        if (
          arr[n][m].charCodeAt(0) >= "A".charCodeAt(0) &&
          arr[n][m].charCodeAt(0) <= "Z".charCodeAt(0)
        ) {
          if (door[arr[n][m].charCodeAt(0) - "A".charCodeAt(0)]) {
            arr[n][m] = ".";
          }
        }
      }
    }

    for (let a of arr) {
      a.unshift(".");
      a.push(".");
    }
    arr.unshift(new Array(w + 2).fill("."));
    arr.push(new Array(w + 2).fill("."));

    const [dx, dy] = [
      [1, -1, 0, 0],
      [0, 0, 1, -1],
    ];

    const isUpper = str => {
      return !/[a-z]/.test(str) && /[A-Z]/.test(str);
    };

    const isLower = str => {
      return /[a-z]/.test(str) && !/[A-Z]/.test(str);
    };

    const bfs = (x, y) => {
      let q = [];
      let visited = new Array(h + 2).fill(0).map(e => new Array(w + 2).fill(0));
      q.push([x, y]);
      visited[x][y] = 1;
      let count = 0;
      while (q.length > 0) {
        const [x, y] = q.shift();
        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          if (
            nx >= 0 &&
            nx < h + 2 &&
            ny >= 0 &&
            ny < w + 2 &&
            visited[nx][ny] === 0
          ) {
            if (arr[nx][ny] === ".") {
              visited[nx][ny] = 1;
              q.push([nx, ny]);
            } else if (isLower(arr[nx][ny])) {
              door[arr[nx][ny].charCodeAt(0) - "a".charCodeAt(0)] = 1;

              q = [];
              visited = new Array(h + 2)
                .fill(0)
                .map(e => new Array(w + 2).fill(0));

              arr[nx][ny] = ".";
              q.push([nx, ny]);
            } else if (isUpper(arr[nx][ny])) {
              if (door[arr[nx][ny].charCodeAt(0) - "A".charCodeAt(0)]) {
                visited[nx][ny] = 1;
                arr[nx][ny] = ".";
                q.push([nx, ny]);
              }
            } else if (arr[nx][ny] === "$") {
              visited[nx][ny] = 1;
              count += 1;
              arr[nx][ny] = ".";
              q.push([nx, ny]);
            }
          }
        }
      }
      console.log(count);
    };

    bfs(0, 0);

    i += h + 2;
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
