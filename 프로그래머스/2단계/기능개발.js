function solution(progresses, speeds) {
  var answer = [];
  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    let a = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      a++;
    }
    if (a > 0) answer.push(a);
  }
  return answer;
}
/////////////////////////////////////
function solution(progresses, speeds) {
  var answer = [];
  let arr = [];
  for (let i = 0; i < progresses.length; i++) {
    arr.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let count = 1;
  let here = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (here >= arr[i]) {
      count += 1;
    } else {
      answer.push(count);
      count = 1
      here = arr[i]
    }
  }
  answer.push(count)
  return answer;
}