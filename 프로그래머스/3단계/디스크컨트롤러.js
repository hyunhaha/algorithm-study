
function solution(jobs) {
  let length = jobs.length
  var answer = 0;
  let priorityQueue = [];
  let time = 0;
  jobs.sort((a, b) => a[0] - b[0]);
  while (priorityQueue.length || jobs.length) {
    while (jobs[0] && jobs[0][0] <= time) {//지금 들어온거나 지금보다 이전에 요청된것들
      priorityQueue.push(jobs.shift());
      priorityQueue.sort((a, b) => a[1] - b[1])
    }
    if (priorityQueue.length) {// 우선순위 큐에 인자가 있을때
      let item = priorityQueue.shift();
      time += item[1];//진행시간에 아이템을 작업하는데 걸리는 시간을 더해
      answer += time - item[0]//아이템 작업 후 현재 시간에서 아이템이 요청된 시간을 빼면 아이템이 요청된 시간부터 완료된시간이므로 answer에 더한다

    } else {
      time = jobs[0][0]
    }
  }
  return Math.floor(answer / length);
}