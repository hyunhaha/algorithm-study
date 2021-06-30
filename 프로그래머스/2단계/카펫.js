function solution(brown, yellow) {
  var answer = [];
  let b = (brown - 4) / 2;
  for (let i = 1; i <= b; i++) {
    if (i * (b - i) === yellow) {
      answer.push(Math.max(i, b - i) + 2);
      answer.push(Math.min(i, b - i) + 2);
      break;
    }
  }
  return answer;
}