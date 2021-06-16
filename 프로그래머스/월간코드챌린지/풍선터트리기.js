function solution(a) {
  var answer = 0;
  let length = a.length;
  let left = new Array(length);
  let right = new Array(length);
  left[0] = a[0];
  right[length - 1] = a[length - 1];
  for (let i = 1; i < length; i++) {
    left[i] = Math.min(left[i - 1], a[i]);
  }
  for (let i = length - 2; i >= 0; i--) {
    right[i] = Math.min(right[i + 1], a[i]);
  }
  const map = new Map();
  for (let i = 0; i < length; i++) {
    map.set(left[i]);
    map.set(right[i]);

  }
  answer = map.size
  return answer;
}