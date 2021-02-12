
function solution(string) {
    let arr = string.split('');
    console.log(arr);
    let result = 0;
    arr.forEach(e => {
        num = Number(e);
        if (num <= 1 || result <= 1) {
            result += num;

        } else {
            result *= num;

        }

    });

    return result;
}
console.log(solution('02984'));