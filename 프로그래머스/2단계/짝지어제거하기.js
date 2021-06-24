function solution(s) {
  var answer = 0;
  let arr = [s[0]];
  for (let i = 1; i < s.length; i++) {
    arr.push(s[i]);
    if (arr[arr.length - 1] === arr[arr.length - 2]) {
      arr.pop();
      arr.pop();
    }
  }
  if (arr.length === 0) answer = 1
  return answer;
}