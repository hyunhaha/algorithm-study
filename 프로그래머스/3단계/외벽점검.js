const getCombi = (arr, n) => {
  if (n === 1) return arr.map(e => [e]);
  let result = []
  arr.forEach((e, idx, origin) => {
    let sliced = origin.filter((_, index) => index !== idx);
    let combinations = getCombi(sliced, n - 1);
    let attached = combinations.map((combi) => [e, ...combi]);
    result.push(...attached);
  })
  return result
}
function solution(n, weak, dist) {
  var answer = 10;
  let weaks = [...weak]
  let permutation = []
  if (weak.length === 1) return 1
  for (let i = 1; i <= dist.length; i++) {
    let combi = getCombi(dist, i);
    permutation = permutation.concat(combi);
  }
  for (let i = 0; i < weak.length; i++) {
    for (const value of permutation) {
      const candidate = [...value]
      const wall = [...weaks];
      let now = wall.shift();
      while (candidate.length > 0) {
        if (wall[0] - now <= candidate[0]) {
          wall.shift()
        } else {
          now = wall[0];
          candidate.shift()
        }
      }
      if (wall.length === 0) {
        if (answer > value.length) answer = value.length
      }
    }
    weaks.push(weaks.shift() + n)
  }

  return answer === 10 ? -1 : answer;
}