
function solution(rows, columns, queries) {
  var answer = [];
  let curx;
  let cury;
  let arr = new Array(rows).fill(0).map(() => new Array(columns));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = i * columns + j + 1
    }
  }
  for (let i = 0; i < queries.length; i++) {
    let [x1, y1, x2, y2] = queries[i].map(e => e - 1);
    let temp = []
    for (let a = y1; a <= y2; a++) {
      curx = x1;
      cury = a;
      temp.push(arr[curx][cury])
    }
    for (let a = x1 + 1; a <= x2; a++) {
      curx = a;
      cury = y2;
      temp.push(arr[curx][cury]);
    }
    for (let a = y2 - 1; a >= y1; a--) {
      curx = x2;
      cury = a;
      temp.push(arr[curx][cury]);
    }
    for (let a = x2 - 1; a > x1; a--) {
      curx = a;
      cury = y1;
      temp.push(arr[curx][cury])

    }
    temp.unshift(temp.pop())
    answer.push(Math.min(...temp));
    for (let a = y1; a <= y2; a++) {
      curx = x1;
      cury = a;
      arr[curx][cury] = temp.shift();
    }

    for (let a = x1 + 1; a <= x2; a++) {
      curx = a;
      cury = y2;
      arr[curx][cury] = temp.shift();

    }
    for (let a = y2 - 1; a >= y1; a--) {
      curx = x2;
      cury = a;
      arr[curx][cury] = temp.shift();

    }
    for (let a = x2 - 1; a > x1; a--) {
      curx = a;
      cury = y1;
      arr[curx][cury] = temp.shift();
    }
  }
  return answer;
}