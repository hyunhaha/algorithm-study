const input = [];

const solution = input => {
  const testCase = Number(input.shift());
  let k = 0;
  const answer = [];

  const sol = (number, n) => {
    for (let i = 0; i < n - 1; i++) {
      if (number[i + 1].slice(0, number[i].length) === number[i]) {
        return "NO";
      }
    }
    return "YES";
  };

  while (k < input.length) {
    const n = Number(input[k]);
    let number = [];

    for (let i = k; i < k + n; i++) {
      number.push(input[i + 1]);
    }

    number.sort((a, b) => a.localeCompare(b));
    answer.push(sol(number, n));
    k += n + 1;
  }

  console.log(answer.join("\n"));
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
