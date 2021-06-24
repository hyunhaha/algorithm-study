function solution(clothes) {
  var answer = 1;
  let key = new Map();
  for (let i = 0; i < clothes.length; i++) {
    if (key.has(clothes[i][1])) {
      key.set(clothes[i][1], key.get(clothes[i][1]) + 1);
    } else {
      key.set(clothes[i][1], 1);
    }
  }
  for (let count of key.values()) {
    answer *= count + 1
  }
  return answer - 1;
}