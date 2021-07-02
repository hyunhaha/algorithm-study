let answer = [0, 0];
function solution(arr) {
  if (arr.length === 1) {
    if (arr[0] === 1) answer[1] += 1;
    else answer[0] += 1;
  } else if (arr.length === 2) {
    let result = check(arr);
    if (result === 1) answer[1] += 1;
    else if (result === 0) answer[0] += 1;
    else {
      solution([arr[0][0]]);
      solution([arr[0][1]]);
      solution([arr[1][0]]);
      solution([arr[1][1]]);
    }
  }
  else {
    if (check(arr) === 0) answer[0] += 1;
    else if (check(arr) === 1) answer[1] += 1;
    else {
      let a = [];
      let b = [];
      let c = [];
      let d = [];
      for (let i = 0; i < arr.length / 2; i++) {
        a.push(arr[i].slice(0, arr[i].length / 2));
        b.push(arr[i].slice(arr[i].length / 2, arr[i].length))
      }
      for (let i = arr.length / 2; i < arr.length; i++) {
        c.push(arr[i].slice(0, arr[i].length / 2));
        d.push(arr[i].slice(arr[i].length / 2, arr[i].length))
      }
      solution(a);
      solution(b);
      solution(c);
      solution(d);
    }
  }
  return answer;
}
const check = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== arr[0][0]) {
        return false
      }
    }
  }
  return arr[0][0]
}