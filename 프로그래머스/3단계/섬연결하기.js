function solution(n, costs) {
  var answer = 0;
  let visited = new Array(n).fill(false);
  let builded = new Array(costs.length).fill(false);
  costs.sort((a, b) => a[2] - b[2]);
  visited[costs[0][0]] = true;
  visited[costs[0][1]] = true;
  builded[0] = true;
  answer += costs[0][2];
  let num = 1;
  while (n - 1 > num) {
    for (let i = 1; i < costs.length; i++) {
      let [pointA, pointB, cost] = costs[i];
      if (!builded[i] && (
        (visited[pointA] && !visited[pointB]) ||
        (!visited[pointA] && visited[pointB]))) {
        answer += cost;
        visited[pointA] = true;
        visited[pointB] = true;
        builded[i] = true;
        num++;
        break;
      }
    }
  }

  return answer;
}