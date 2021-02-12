function solution(S) {
    let answer = 0;
    let arr = S.split('');
    let count0 = 0;
    let count1 = 0;
    if (arr[0] === '0') {
        count1 += 1;
    } else {
        count0 += 1;
    }
    console.log(arr);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] != arr[i + 1]) {
            if (arr[i + 1] === '1') {
                count0 += 1;
            } else {
                count1 += 1;
            }
        }
    }
    return answer = Math.min(count0, count1);
}
console.log(solution('000110010101111011001010110'));