function solution(n, computers) {
  var answer = 0;
  let check = new Array(n).fill(false);
  let comLength = computers.length;

  function dfs(index) {
    check[index] = true;

    for (let i = 0; i < comLength; i++) {
      if (computers[index][i] === 1 && !check[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < comLength; i++) {
    if (!check[i]) {
      dfs(i);
      answer += 1;
    }
  }

  return answer;
}