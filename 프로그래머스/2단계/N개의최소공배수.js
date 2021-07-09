function solution(arr) {
  var answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    answer = small(answer, arr[i]);
  }
  return answer;
}
function small(a, b) {
  return (a * b) / large(a, b);
}
function large(a, b) {
  return (a % b) === 0 ? b : large(b, a % b);
}