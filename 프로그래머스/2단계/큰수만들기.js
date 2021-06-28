function solution(number, k) {
  var answer = '';
  let arr = [];
  for (let i = 0; i < number.length; i++) {
    let a = number[i];
    while (k > 0 && arr[arr.length - 1] < a) {
      arr.pop();
      k--;
    }
    arr.push(a);
  }
  console.log(arr);
  arr.splice(arr.length - k, k);//arr의 길이가 긴 경우에 arr의 전체 길이에서 k만큼 뺀 위치부터 끝까지 만으로 설정
  answer = arr.join('');
  return answer;
}