const input = [];

const solution = input => {
  let answer = Infinity;

  let [n1, m1] = input.shift().split(" ").map(Number);
  const arr1 = new Array(51).fill(0).map(e => new Array(51).fill(0));
  for (let i = 0; i < n1; i++) {
    const temp = input.shift().split("").map(Number);
    for (let j = 0; j < temp.length; j++) {
      arr1[i][j] = temp[j];
    }
  }

  let [n2, m2] = input.shift().split(" ").map(Number);
  const arr2 = new Array(51).fill(0).map(e => new Array(51).fill(0));
  for (let i = 0; i < n2; i++) {
    const temp = input.shift().split("").map(Number);
    for (let j = 0; j < temp.length; j++) {
      arr2[i][j] = temp[j];
    }
  }

  const frame = new Array(151).fill(0).map(e => new Array(151).fill(0));
  for (let i = 50; i < 50 + n2; i++) {
    for (let j = 50; j < 50 + m2; j++) {
      frame[i][j] = arr2[i - 50][j - 50];
    }
  }

  const rotate = () => {
    const temp = new Array(51).fill(0).map(e => new Array(51).fill(0));
    for (let i = m1 - 1; i >= 0; i--) {
      for (let j = 0; j < n1; j++) {
        temp[m1 - 1 - i][j] = arr1[j][i];
      }
    }
    for (let i = 0; i <= 50; i++) {
      for (let j = 0; j <= 50; j++) {
        arr1[i][j] = temp[i][j];
      }
    }
    let t = n1;
    n1 = m1;
    m1 = t;
  };

  const fit = (y, x) => {
    let flag = false;
    for (let i = y; i < y + n1; i++) {
      for (let j = x; j < x + m1; j++) {
        if (frame[i][j] === 1 && arr1[i - y][j - x] === 1) {
          flag = true;
          break;
        }
      }
      if (flag) break;
    }
    if (!flag) {
      const minY = Math.min(y, 50);
      const maxY = Math.max(y + n1 - 1, 49 + n2);
      const minX = Math.min(x, 50);
      const maxX = Math.max(x + m1 - 1, 49 + m2);

      const total = (maxY - minY + 1) * (maxX - minX + 1);
      answer = Math.min(answer, total);
    }
  };

  for (let k = 0; k < 4; k++) {
    rotate();
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        fit(i, j);
      }
    }
  }
  console.log(answer);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
