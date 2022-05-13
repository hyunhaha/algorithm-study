const input = [];

const solution = input => {
  const testCase = Number(input.shift());
  const getResult = (n, arr) => {
    let answer = 0;
    let max = arr[n - 1];

    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > max) {
        max = arr[i];
      } else {
        answer += max - arr[i];
      }
    }
    return answer;
  };
  for (let i = 0; i < input.length; i += 2) {
    const n = input[i];
    const arr = input[i + 1].split(" ").map(Number);
    const result = getResult(n, arr);
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
