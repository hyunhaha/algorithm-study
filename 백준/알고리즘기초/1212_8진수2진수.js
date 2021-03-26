const solution = (input) => {
  let answer = ''
  for (let i = 0; i < input.length; i++) {
    ;
    let totwo = Number(input[i]).toString(2);

    if (totwo.length !== 3 && i !== 0) {
      let zero = 3 - totwo.length;
      for (let j = 0; j < zero; j++) {
        totwo = '0' + totwo
      }
    };
    answer += totwo
  }
  return answer

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
