const solution = (line) => {
  const [A, B, C] = line.split(' ').map(e => Number(e));
  let answer = '';

  answer += (A + B) % C + '\n';
  answer += ((A % C) + (B % C)) % C + '\n';
  answer += (A * B) % C + '\n';
  answer += ((A % C) * (B % C)) % C;
  return answer
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(line));
  rl.close();
}).on('close', function () {
  process.exit();
});