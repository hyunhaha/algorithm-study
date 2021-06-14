const solution = (input) => {
  const n = Number(input.shift());
  const m = Number(input.shift());
  let enable = new Array(10).fill(0).map((e, i) => e = i)
  if (m > 0) {
    const mArr = input.shift().split(' ').map(e => Number(e));

    enable = enable.filter(x => !mArr.includes(x));
  }


  let min = Math.abs(100 - n);//100에서 +/-버튼으로만 이동한 경우

  for (let i = 0; i <= 1000000; i++) {
    let num = i;
    let numString = num.toString(10);
    for (let j = 0; j < numString.length; j++) {
      if (!enable.includes(Number(numString[j]))) {
        break;
      }
      if (j === numString.length - 1) {//마지막에
        min = Math.min(min, Math.abs(n - num) + numString.length);
      }
    }
  }

  return min
}
let input = [];
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(solution(input))
  process.exit();
});