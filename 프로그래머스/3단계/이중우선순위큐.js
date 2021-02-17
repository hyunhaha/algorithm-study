function solution(operations) {
  var answer = [];
  let queue = [];
  for (let i = 0; i < operations.length; i++) {
    let [oper, data] = operations[i].split(' ');
    if (oper === 'I') {
      queue.push(data);
      queue.sort((a, b) => Number(a) - Number(b));
    } else {
      if (data === '1') queue.pop();
      else queue.shift();
    }
  }
  if (queue.length === 0) return [0, 0];
  else {
    answer.push(Number(queue.pop()));
    answer.push(Number(queue.shift()));
  }
  return answer;
}