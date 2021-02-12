function solution(N, K) {
    let n = N;
    let answer = 0;
    while (n > 1) {
        if (n % K !== 0) {
            n -= 1;
            answer++;
        } else {
            n = parseInt(n / K);
            answer++;
        }
        console.log(n);
    }
    return answer;
}
console.log(solution(25, 3));