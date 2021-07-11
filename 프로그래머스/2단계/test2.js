function solution(n, wires) {
  var answer = [];
  let arr = new Array(n + 1).fill(0).map(e => new Array());

  for (let i = 0; i < wires.length; i++) {
    let [a, b] = wires[i];
    arr[a].push(b);
    arr[b].push(a);
  }

  let maxLen = arr.map((e, i) => e = [i, e.length]).sort((a, b) => b[1] - a[1])[0][0];

  for (let i = 0; i < arr[maxLen].length; i++) {
    let temp = [...arr];
    let visited = new Array(n + 1).fill(false);
    let cut = arr[maxLen][i];
    temp[maxLen] = temp[maxLen].filter(e => e !== cut);
    visited[maxLen] = true;

    let result = check(visited, [...temp[maxLen]], temp);

    answer.push(Math.abs(Math.abs(n - result) - result))
  }
  return Math.min(...answer);
}
const check = (visited, queue, origin) => {
  let count = 0;
  if (queue.length === 1 && visited[queue[0]]) return 1;
  else {
    count += 1;
  }
  for (let i = 0; i < queue.length; i++) {
    if (!visited[queue[i]]) {
      visited[queue[i]] = true;
      count += check(visited, origin[queue[i]], origin);
    }
  }
  return count;
}


// console.log('result', solution(9, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]]))
// console.log('result', solution(4, [[1, 2], [2, 3], [3, 4]]))
console.log('result', solution(7, [[1, 2], [2, 7], [3, 7], [3, 4], [4, 5], [6, 7]]))