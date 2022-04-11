const input = [];

const solution = input => {
  const n = Number(input[0]);
  const arr = input[1].split(" ").map(Number);
  const s = [arr[0]];
  for (let i = 0; i < n; i++) {
    let start = 0;
    let end = s.length;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (s[mid] >= arr[i]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    s[start] = arr[i];
  }
  console.log(s.length);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
