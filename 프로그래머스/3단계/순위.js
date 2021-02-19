function solution(n, results) {
  var answer = 0;
  let arr = Array.from({ length: n }, () => new Array(n).fill(false))

  results.map(e => {
    let [win, lose] = e;
    win = win - 1;
    lose = lose - 1;
    arr[win][lose] = 1;
    arr[lose][win] = -1;
    arr[win][win] = 0;
    arr[lose][lose] = 0;
  });

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i][k] === 1 && arr[k][j] === 1) {
          arr[i][j] = 1;
        }
        if (arr[i][k] === -1 && arr[k][j] === -1) {
          arr[i][j] = -1;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!arr[i].includes(false)) {
      answer++
    }
  }
  return answer;
}