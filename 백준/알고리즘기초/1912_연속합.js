const solution = (input) => {
  const n = input[0];
  let arr = input[1].split(' ').map(e => Number(e));
  let dp = [];

  dp[0] = arr[0];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
    //지금까지 더한값 answer 과 현재 값을 비교하여 현재값이 더 크다면 그 이전 수들은 망설임 없이 버리고 새로 시작해도 된다.

    // if (answer[i] < answer[i - 1] + arr[i]) {

    //   answer[i] = answer[i - 1] + arr[i]
    // }
  }
  return Math.max(...dp)
}
let input = [];
const readline = require('readline');
const { Console } = require('console');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});