function solution(n) {
    var answer = '';
    let num = n;
    while (num > 0) {
        if (num % 3 === 1) {
            answer = '1' + answer
            num = parseInt(num / 3)
        } else if (num % 3 === 2) {
            answer = '2' + answer;
            num = parseInt(num / 3)
        } else if (num % 3 === 0) {
            answer = '4' + answer;
            num = num / 3 - 1
        }
    }
    return answer;
}