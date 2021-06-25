function solution(expression) {
  var answer = 0;
  const arr = [['*', '+', '-'],
  ['*', '-', '+'],
  ['+', '*', '-'],
  ['+', '-', '*'],
  ['-', '*', '+'],
  ['-', '+', '*']]

  let number = expression.split(/[^0-9]/);
  number = number.map(e => parseInt(e));
  let sign = [];
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '*' || expression[i] === '+' || expression[i] === '-') {
      sign.push(expression[i]);
    }
  }
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    const copyNum = number.slice();
    const copySign = sign.slice();
    for (let j = 0; j < arr[i].length; j++) {
      for (let s = 0; s < copySign.length; s++) {
        if (copySign[s] === arr[i][j]) {
          if (copySign[s] === '*') {
            copyNum[s] *= copyNum[s + 1];
            copyNum.splice(s + 1, 1);
            copySign.splice(s, 1);
            s--;
          } else if (copySign[s] === '+') {
            copyNum[s] += copyNum[s + 1];
            copyNum.splice(s + 1, 1);
            copySign.splice(s, 1);
            s--;
          } else {
            copyNum[s] -= copyNum[s + 1];
            copyNum.splice(s + 1, 1);
            copySign.splice(s, 1);
            s--;
          }

        }
      }
    } if (Math.abs(copyNum[0]) >= max) {
      max = Math.abs(copyNum[0]);
    }
  }
  return max;
}