const input = [];

const solution = input => {
  const [h, w] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  let answer = 0;

  for (let i = 1; i < w; i++) {
    let leftMax = 0;
    let rightMax = 0;
    for (let j = 0; j < i; j++) {
      leftMax = Math.max(leftMax, arr[j]);
    }
    for (let j = i + 1; j < w; j++) {
      rightMax = Math.max(rightMax, arr[j]);
    }
    const result = Math.min(leftMax, rightMax) - arr[i];
    if (result > 0) {
      answer += result;
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
