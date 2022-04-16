const input = [];

const solution = input => {
  const str = input[0];
  const sub = input[1];
  const pattern = new Array(sub.length).fill(0);
  const setPattern = () => {
    let j = 0;
    for (let i = 1; i < sub.length; i++) {
      while (j > 0 && sub[i] !== sub[j]) {
        j = pattern[j - 1];
      }
      if (sub[i] === sub[j]) {
        j += 1;
        pattern[i] = j;
      }
    }
  };
  const kmp = () => {
    setPattern();
    j = 0;
    for (let i = 0; i < str.length; i++) {
      while (j > 0 && str[i] !== sub[j]) {
        j = pattern[j - 1];
      }
      if (str[i] === sub[j]) {
        if (j === sub.length - 1) {
          return true;
        } else {
          j += 1;
        }
      }
    }
    return false;
  };
  const result = kmp();
  if (result) {
    console.log(1);
  } else {
    console.log(0);
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
