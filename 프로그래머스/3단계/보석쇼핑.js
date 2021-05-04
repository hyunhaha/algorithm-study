function solution(gems) {
  const result = new Set(gems);
  const resultSize = result.size;
  const gemsLength = gems.length;
  const nowGems = new Map();
  nowGems.set(gems[0], 1);
  let first = 0;
  let last = 0;
  let answer = [0, gemsLength - 1]
  while (first <= last && last < gemsLength) {
    if (nowGems.size === resultSize) {
      if (last - first < answer[1] - answer[0]) {
        answer = [first, last]
      }
      if (last - first === answer[1] - answer[0]) {
        if (first < answer[0]) {
          answer = [first, last]
        }
      }
      if (nowGems.get(gems[first]) > 1) {
        nowGems.set(gems[first], nowGems.get(gems[first]) - 1);

      } else {
        nowGems.delete(gems[first]);
      }
      first += 1;
    } else {
      last += 1;
      nowGems.set(gems[last], nowGems.get(gems[last]) + 1 || 1)
    }
  }
  return [answer[0] + 1, answer[1] + 1];
}