const check = (s) => {
  let str = s;
  let stack = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') stack.push(s[i])
    else {
      if (stack.length > 1 && stack[stack.length - 1] === '1' && stack[stack.length - 2] === '1') {
        stack.pop()
        stack.pop()
        count++;
      } else {
        stack.push(s[i])
      }
    }
  }

  str = stack.join('');
  let addStr = '110'.repeat(count);
  let point = str.indexOf('111')
  let answer = ''
  if (point != -1) {
    answer = str.slice(0, point) + addStr + str.slice(point);
  } else {
    let lastIdx = str.length - 1
    console.log(lastIdx)
    if (str[lastIdx] === '1') {
      while (str[lastIdx] === '1' && lastIdx - 1 >= 0) {
        lastIdx -= 1;
      };
    }
    if (lastIdx == 0 && str[lastIdx] == '1') {
      answer = addStr + str;
    } else {
      answer = str.slice(0, lastIdx + 1) + addStr + str.slice(lastIdx + 1);
    }
  }
  return answer
}

function solution(s) {
  var answer = [];
  for (let i = 0; i < s.length; i++) {
    answer.push(check(s[i]))
  }
  return answer;
}