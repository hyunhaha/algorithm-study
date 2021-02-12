function solution(genres, plays) {
  var answer = [];
  let obj = genres.reduce((acc, e, idx) => {
    if (e in acc) {
      acc[e].plays += plays[idx]
    } else {
      acc[e] = {
        plays: plays[idx],
        music: []
      }
    }
    acc[e].music.push([idx, plays[idx]])
    return acc;
  }, {});
  let sorted = Object.values(obj).sort((a, b) => b.plays - a.plays);
  sorted.forEach(e => {
    if (e.music.length > 1) {
      e.music.sort((a, b) => b[1] - a[1]);
      answer.push(e.music[0][0]);
      answer.push(e.music[1][0]);
    } else {
      answer.push(e.music[0][0])
    }


  })
  return answer;
}
