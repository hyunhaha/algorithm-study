function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let b = number.toString(2).split('');

    if (number % 2 === 0) {
      answer.push(number + 1)

    } else {
      if (!b.includes('0')) b.unshift('0')
      for (let j = b.length - 1; j >= 0; j--) {
        if (b[j] === '0' && j !== b.length - 1) {
          b[j] = '1';
          b[j + 1] = '0'
          break;
        }
      }
      answer.push(parseInt(b.join(''), 2))
    }
  }
  return answer;
}