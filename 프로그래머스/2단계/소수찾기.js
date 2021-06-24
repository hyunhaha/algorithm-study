function solution(numbers) {
  var answer = [];
  let arr = numbers.split('');
  const isPrime = (s) => {
    let n = Number(s);
    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        count++;
      }
      if (count > 3) {
        break;
      }
    }
    if (count === 2 && !answer.includes(n)) {
      answer.push(n)
    }
  }

  const get = (arr, str) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        let temp = [...arr];
        let first = temp.splice(i, 1);
        get(temp, str + first);
      }
    }
    if (str.length > 0) {
      isPrime(str);
    }
  }
  get(arr, '')
  return answer.length;
}