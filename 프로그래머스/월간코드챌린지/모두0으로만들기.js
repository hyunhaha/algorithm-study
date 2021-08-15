function solution(a, edges) {
  if (a.reduce((acc, e) => acc += e, 0) !== 0) return -1;
  let tree = new Array(a.length).fill(0).map(e => new Array());
  let nums = [...a];
  edges.forEach(([f, s]) => {
    tree[f].push(s)
    tree[s].push(f)
  })
  let result = (0);
  let visited = new Array(a.length).fill(false);
  let stack = [[0, null]];
  while (stack.length) {
    let [cur, parent] = stack.pop();
    if (visited[cur]) {
      result += (Math.abs(nums[cur]));
      nums[parent] += nums[cur];
      nums[cur] = 0;
      continue
    }
    visited[cur] = true;
    stack.push([cur, parent]);
    for (let i of tree[cur]) {
      if (!visited[i]) stack.push([i, cur]);
    }
  }

  return result;
}