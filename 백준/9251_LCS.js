const input = [];

const solution = input => {
  const s1 = input[0];
  const s2 = input[1];
  const arr = Array.from(Array(s1.length + 1), () =>
    Array(s2.length + 1).fill(0)
  );

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1] + 1;
      } else {
        arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
      }
    }
  }

  console.log(arr[s1.length][s2.length]);
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
