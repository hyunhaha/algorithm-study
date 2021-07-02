function solution(msg) {
  var answer = [];
  let arr = new Array(26).fill(0).map((e, i) => String.fromCharCode(i + 65));

  for (let i = 0; i < msg.length; i++) {
    let s = msg[i];
    let ns = msg[i + 1];

    while (arr.includes(s + ns) && i < msg.length - 1) {
      i++;
      s = s + ns;
      ns = msg[i + 1];
    }

    answer.push(arr.indexOf(s) + 1);
    if (ns !== undefined) arr.push(s + ns)

  }
  return answer;
}