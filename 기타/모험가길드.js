function solution(N, arr) {
    console.log(N, arr);
    arr.sort();
    let count = 0;
    let result = 0;
    arr.forEach(e => {
        count += 1;
        if (e <= count) {
            result = count;
            count = 0;
        }
    });
    return result;
}

console.log(solution(5, [2, 3, 1, 2, 2]));