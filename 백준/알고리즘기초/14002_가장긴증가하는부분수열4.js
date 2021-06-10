// const solution = (input) => {
//   let n = Number(input[0]);
//   let arr = input[1].split(' ').map(e => Number(e))
//   // console.log(arr)
//   let temp = new Array(n).fill(1);
//   let value = new Array(n).fill(0);
//   for (let i = 0; i < n; i++) {
//     value[i] = [arr[i]];
//     for (let j = 0; j < i; j++) {
//       if (arr[i] > arr[j] && temp[j] >= temp[i]) {
//         temp[i] = temp[j] + 1;
//         // console.log('j', value[j])
//         value[i] = [...value[j], arr[i]]

//       }
//     }

//   }
//   // console.log(temp)
//   // console.log(value)
//   let maxTemp = temp[0];
//   let maxValue = value[0];
//   for (let i = 1; i < n; i++) {
//     if (maxTemp < temp[i]) {
//       maxTemp = temp[i];
//       maxValue = value[i];
//     }
//   }
//   return maxTemp + '\n' + maxValue.join(' ');
// }
// let input = [];
// const readline = require('readline');
// const { Console } = require('console');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   console.log(solution(input));
//   process.exit();
// });
const solution = (input) => {
  let n = Number(input[0]);
  let arr = input[1].split(' ').map(e => Number(e))
  // console.log(arr)
  let temp = new Array(n).fill(1);
  let v = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && temp[j] >= temp[i]) {
        temp[i] = temp[j] + 1;
        v[i] = j;
      }
    }
  }
  console.log(v)
  let max = Math.max(...temp);
  let p;
  for (let i = 0; i < n; i++) {
    if (temp[i] === max) {
      p = i
    }
  }
  const go = (p) => {
    if (p === -1) {
      return;
    }
    console.log(p)
    go(v[p])
    console.log(arr[p])
  }
  go(p)
}
let input = [];
const readline = require('readline');
const { Console } = require('console');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});