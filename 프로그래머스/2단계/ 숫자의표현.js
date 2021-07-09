function solution(n) {
  var answer = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = i;
    if (sum === n) {
      answer += 1;
      break;
    }
    for (let j = i + 1; j <= n; j++) {
      sum += j;
      if (sum > n) {
        break;
      } else if (sum === n) {
        answer += 1;
        break;
      }
    }
  }
  return answer;
}