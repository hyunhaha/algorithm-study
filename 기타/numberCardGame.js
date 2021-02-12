function solution(N, M, arr) {
    let a = [];
    arr.forEach(e => {
        a.push(Math.min(...e));
    });
    console.log(a);
    return Math.max(...a);
}
console.log(solution(3, 3, [[3, 1, 2], [4, 1, 4], [2, 2, 2]]));