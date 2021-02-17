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

//Find-Union 알고리즘 사용
function solution(n, costs) {
  var answer = 0;
  let table = new Array(n).fill(0).map((e, idx) => idx);
  costs.sort((a, b) => a[2] - b[2]);

  const isAllSame = (table) => {
    for (let i = 1; i < table.length; i++) {
      if (table[i] !== table[i - 1]) return false;
    }
    return true;
  };

  const changeTable = (start, end, table) => {
    let tableEnd = table[end];
    let tableStart = table[start];
    for (let i = 0; i < table.length; i++) {
      if (table[i] === tableEnd) {
        table[i] = tableStart;
      }
    }
    return table;
  };

  while (!isAllSame(table)) {
    let [start, end, cost] = costs.shift();
    if (table[start] !== table[end]) {
      table = changeTable(start, end, table);
      answer += cost;
    }
  }
  return answer;
}