function solution(p) {
  var answer = '';
  if (p.length === 0) return answer;
  else {
    let open = 0;
    let close = 0;
    let u = '';
    let v = '';
    for (let i = 0; i < p.length; i++) {
      if (p[i] === '(') {
        open += 1;
      } else {
        close += 1;
      }
      if (close === open) {
        u = p.slice(0, i + 1);
        v = p.slice(i + 1, p.length);
        break;
      }
    }


    if (isRight(u)) {
      answer = u + solution(v)
    } else {
      answer += '(' + solution(v) + ')';
      u = u.slice(1, u.length - 1);
      let U = '';
      for (let i = 0; i < u.length; i++) {
        if (u[i] === '(') U += ')';
        else U += '(';
      }
      answer += U;
    }
  }

  return answer;
}
function isRight(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      arr.push(str[i]);
    } else {
      if (arr.length === 0 || arr[arr.length - 1] !== "(") return false;
      arr.pop();
    }
  }
  if (arr.length === 0) return true;
  else return false;
}