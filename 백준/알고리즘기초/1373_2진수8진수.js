const solution = (input) => {
  let len = input.length;
  let index = len % 3 !== 0 ? Math.floor(len / 3) : Math.floor(len / 3) - 1;

  let eightArr = new Array(index + 1)
  const powNumbers = [1, 2, 4];
  let powNumber = 0;
  let num = 0;
  while (--len >= 0) {
    num += Number(input[len]) * powNumbers[powNumber];
    if (powNumber === 2) {
      eightArr[index] = num;
      index--;
      powNumber = 0;
      num = 0;
    } else {
      powNumber++
    }
  }
  if (index === 0) {
    eightArr[index] = num
  }
  return eightArr.join("")
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, output: process.stdout,
});
let input; rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  console.log(solution(input));
  process.exit();
});
