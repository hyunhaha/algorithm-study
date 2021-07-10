function solution(n, a, b) {
  let A = a;
  let B = b;
  let count = 0;
  while (A !== B) {

    A = Math.ceil(A / 2);
    B = Math.ceil(B / 2);
    count++;
  }
  return count;
}