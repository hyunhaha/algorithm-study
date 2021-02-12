function solution(N, M, array) {
    let arr = [];
    for (let i = 0; i < 11; i++) {
        arr.push(0);
    }
    array.forEach(e => {
        arr[e] += 1;
    });
    let n = N;
    let result = 0
    for (let i = 1; i < arr.length; i++) {
        n -= arr[i];
        console
        result += arr[i] * n;
    }
    return result;
}
console.log(solution(8, 5, [1, 5, 4, 3, 2, 4, 5, 2]));