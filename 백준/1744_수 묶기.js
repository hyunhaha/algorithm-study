const input = [];

const solution = input => {
  const n = Number(input.shift());
  const plus = [];
  const minus = [];
  const one = [];
  for (let i = 0; i < n; i++) {
    const num = Number(input[i]);
    if (num > 1) {
      plus.push(num);
    } else if (num <= 0) {
      minus.push(num);
    } else {
      one.push(num);
    }
  }
  plus.sort((a, b) => b - a);
  minus.sort((a, b) => a - b);

  let answer = 0;
  if (plus.length % 2 === 1) {
    for (let i = 0; i < plus.length - 2; i += 2) {
      answer += plus[i] * plus[i + 1];
    }
    answer += plus[plus.length - 1];
  } else {
    for (let i = 0; i < plus.length; i += 2) {
      answer += plus[i] * plus[i + 1];
    }
  }

  if (minus.length % 2 === 1) {
    for (let i = 0; i < minus.length - 2; i += 2) {
      answer += minus[i] * minus[i + 1];
    }
    answer += minus[minus.length - 1];
  } else {
    for (let i = 0; i < minus.length; i += 2) {
      answer += minus[i] * minus[i + 1];
    }
  }
  answer += one.length;
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
