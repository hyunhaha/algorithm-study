
function solution(n, s, a, b, fares) {
  let answer = 20000000, inf = 20000000;
  a = a - 1;
  b = b - 1;
  s = s - 1;
  let arr = new Array(n).fill(0).map(e => new Array(n).fill(inf));
  // for(let i=0;i<arr.length;i++){
  //     arr[i]=new Array(n).fill(20000000)
  // }

  for (let i = 0; i < fares.length; i++) {
    let [c, d, fare] = fares[i];
    c = c - 1;
    d = d - 1;
    arr[c][d] = fare;
    arr[d][c] = fare;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === j) {
          arr[i][j] = 0;
        } else {
          arr[i][j] = Math.min(arr[i][j], arr[i][k] + arr[k][j])
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[s][i] !== 200000 && arr[i][a] !== 200000 && arr[i][b] !== 200000) {
      answer = Math.min(answer, arr[s][i] + arr[i][a] + arr[i][b])
    }

  }

  return answer;
}
//효율성 절반으로 줄인 코드
function solution(n, s, a, b, fares) {
  let answer = 20000000, inf = 20000000;
  a = a - 1;
  b = b - 1;
  s = s - 1;
  let arr = new Array(n).fill(0).map(e => new Array(n).fill(inf));

  for (let i = 0; i < fares.length; i++) {
    let [c, d, fare] = fares[i];
    c = c - 1;
    d = d - 1;
    arr[c][d] = fare;
    arr[d][c] = fare;
  }
  for (let i = 0; i < n; i++) {
    arr[i][i] = 0;
  }
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i][j] > arr[i][k] + arr[k][j])
          arr[i][j] = arr[i][k] + arr[k][j];
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[s][i] !== 200000 && arr[i][a] !== 200000 && arr[i][b] !== 200000) {
      answer = Math.min(answer, arr[s][i] + arr[i][a] + arr[i][b])
    }

  }

  return answer;
}