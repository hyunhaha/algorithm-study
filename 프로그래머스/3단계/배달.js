function solution(N, road, K) {
  var answer = 0;
  let visit = new Array(N + 1).fill(Infinity);
  let adj = Array.from(Array(N + 1), () => Array());
  for (let i = 0; i < road.length; i++) {
    let [A, B, time] = road[i];
    adj[A].push({ to: B, time: time })
    adj[B].push({ to: A, time: time })
  }
  visit[1] = 0;
  let check = [{ to: 1, time: 0 }];
  while (check.length) {
    let temp = check.pop();
    adj[temp.to].forEach(e => {
      if (visit[e.to] > visit[temp.to] + e.time) {

        visit[e.to] = visit[temp.to] + e.time
        check.push(e);
      }
    });


  }
  visit.forEach(e => e <= K && answer++);
  return answer
}