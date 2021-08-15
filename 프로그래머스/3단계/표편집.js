function solution(n, k, cmd) {
  let deleted = [];
  let point = k;
  let len = n;

  for (let i = 0; i < cmd.length; i++) {
    let [command, count] = cmd[i].split(' ');
    if (command === 'D') {
      k += Number(count);
    } else if (command === 'U') {
      k -= Number(count);
    } else if (command === 'C') {
      deleted.push(k);
      len--;
      if (k === len) k--;
    } else if (command === 'Z') {
      if (deleted.pop() <= k) k++;
      len++;
    }
  }

  let arr = new Array(len).fill('O');

  while (deleted.length !== 0) {
    let idx = deleted.pop();
    arr.splice(idx, 0, 'X');
    // let end=arr.splice(idx,arr.length);
    // arr.push('X');
    // arr.concat(end)
  }

  return arr.join('');

}