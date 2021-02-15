function solution(tickets) {
  var answer = [];
  function dfs(airport, tickets, path) {
    let newPath = [...path, airport]
    if (tickets.length === 0) {
      answer.push(newPath);
    }
    else {
      tickets.map((e, idx) => {
        if (e[0] === airport) {
          let copy = [...tickets];
          let [[start, end]] = copy.splice(idx, 1)
          dfs(end, copy, newPath);
        }
      })
    }
  }
  dfs('ICN', tickets, [])
  return answer.sort()[0];
}