const solution = (n) => {
  let arr = Array.from(new Array(n), () => new Array(2).fill(BigInt(0)));

  arr[0][0] = BigInt(0);
  arr[0][1] = BigInt(1);
  for (let i = 1; i < n; i++) {
    arr[i][0] = arr[i - 1][0] + arr[i - 1][1];
    arr[i][1] = arr[i - 1][0];
  }
  return arr[n - 1].reduce((acc, e) => acc + e).toString();

}
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(+line));
  rl.close();
}).on('close', function () {
  process.exit();
});