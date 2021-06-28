function solution(m, n, board) {
  var answer = 0;
  let b = board.map(e => e.split(''))
  while (true) {
    let arr = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let point = b[i][j];
        if (point && point === b[i + 1][j] && point === b[i + 1][j + 1] && point == b[i][j + 1]) {
          arr.push([i, j])
        }
      }
    }
    if (arr.length === 0) {
      return [].concat(...b).filter(e => e === 0).length
    }
    arr.forEach(e => {
      b[e[0]][e[1]] = 0;
      b[e[0]][e[1] + 1] = 0;
      b[e[0] + 1][e[1]] = 0;
      b[e[0] + 1][e[1] + 1] = 0;
    });
    for (let i = m - 1; i > 0; i--) {
      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !b[i][j]; k--) {
          if (b[k][j]) {
            b[i][j] = b[k][j];
            b[k][j] = 0;
            break;
          }
        }
      }
    }
  }

  return answer;
}