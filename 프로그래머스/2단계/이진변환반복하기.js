function solution(s) {
  var answer = [0, 0];

  while (s.length > 1) {
    answer[1] += s.split('').filter(e => e === '0').length;
    s = (s.split('').filter(e => e === '1').length).toString(2);
    answer[0]++;
  }


  return answer;
}