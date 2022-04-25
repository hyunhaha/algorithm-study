const input = [];

const solution = input => {
  const [n, m] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  if (n <= m) {
    console.log(n);
    return;
  } else {
    let answer = 0;
    let left = Math.min(...arr);
    let right = Math.max(...arr) * n;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let result = 0;
      for (let i of arr) {
        result += Math.floor(mid / i);
      }
      if (result >= n - m) {
        right = mid - 1;
        answer = mid;
      } else {
        left = mid + 1;
      }
    }
    let count = 0;
    let temp = 0;
    for (let i of arr) {
      temp += Math.floor((answer - 1) / i);
    }
    count = n - m - temp;
    const res = arr.reduce((acc, e, i) => {
      if (answer % e === 0) {
        acc.push(i);
      }
      return acc;
    }, []);
    console.log(res[count - 1] + 1);
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
