function rotation(key) {
    const len = key.length;
    const arr = Array.from(Array(len), () => Array(len).fill(null));
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            arr[i][j] = key[len - j - 1][i];
        }
    }
    return arr;
}
function check(new_lock) {
    const len = new_lock.length / 3;
    for (let i = len; i < len * 2; i++) {
        for (let j = len; j < len * 2; j++) {
            if (new_lock[i][j] !== 1) {
                return false;
            }
        }
    }
    return true;
}

function solution(key, lock) {
    var answer = true;
    const lock_len = lock.length;
    const key_len = key.length;
    const arr = Array.from(Array(lock_len * 3), () => Array.from(lock_len * 3).fill(null));
    for (let i = lock_len; i < lock_len * 2; i++) {
        for (let j = lock_len; j < lock_len * 2; j++) {
            arr[i][j] = lock[i - lock_len][j - lock_len];
        }
    }

    for (let rot = 0; rot < 4; rot++) {
        key = rotation(key);
        for (let x = 0; x < lock_len * 2; x++) {
            for (let y = 0; y < lock_len * 2; y++) {
                for (let i = 0; i < key_len; i++) {
                    for (let j = 0; j < key_len; j++) {
                        arr[x + i][y + j] += key[i][j];
                    }
                }
                if (check(arr) === true) {
                    return true;
                }
                for (let i = 0; i < key_len; i++) {
                    for (let j = 0; j < key_len; j++) {
                        arr[x + i][y + j] -= key[i][j];
                    }
                }
            }
        }
    }
    return false;
}

console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]));