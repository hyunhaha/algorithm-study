function solution(n, times) {
  times.sort((a, b) => a - b);
  let min = 0;
  let max = times[times.length - 1] * n;
  let mid = Math.floor((min + max) / 2);
  while (min <= max) {

    let count = times.reduce((acc, e) => acc + Math.floor(mid / e), 0);
    if (count >= n) max = mid - 1;
    else min = mid + 1;
    mid = Math.floor((min + max) / 2);
  }
  return min;
}