function solution(s) {
  var answer = s.length;

  for (let i = 1; i < parseInt(s.length / 2) + 1; i++) {
    let string = '';
    let step = s.slice(0, i);
    console.log('step', step);
    let count = 1;
    for (let j = i; j < s.length; j += i) {

      if (s.slice(j, j + i) === step) {
        count++;
      } else {

        string += count > 1 ? count + step : step;
        step = s.slice(j, j + i);
        count = 1;
      }

    }
    string += count > 1 ? count + step : step; //s끝까지 돌고나서 마지막 string 붙여주기

    answer = Math.min(answer, string.length);

  }
  return answer;
}