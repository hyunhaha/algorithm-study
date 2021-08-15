const solution = (input) => {
  let [N, L] = input.shift().split(' ');
  let [start, end] = input.pop().split(' ').map(e => Number(e));
  let subway = input;

  let obj = {};
  let visited = new Set();

  for (let i = 0; i < L; i++) {
    subway[i] = subway[i].split(' ').map(e => Number(e));
    subway[i].pop();
    let line = subway[i];
    for (let j = 0; j < line.length; j++) {
      let station = line[j];
      if (station in obj) {
        obj[station].push(i);
      } else {
        obj[station] = [i];
      }
    }
  }

  let queue = [start];
  let count = 0;
  while (queue.length) {
    let temp = new Set;
    while (queue.length) {
      let station = queue.pop();
      if (visited.has(station)) continue;
      visited.add(station);
      for (let line of obj[station]) {
        if (subway[line].includes(end)) {
          return count;
        }
      }
      for (let line of obj[station]) {
        for (let s of subway[line]) {
          if (!visited.has(s)) {
            temp.add(s);
          }
        }
      }
    }
    queue = [...temp]
    count += 1
  }
  return -1
}
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(solution(input));

//3시부터 11시까지 8시간을 고민해서 풀었다,,
//array에 array를 쓰면 메모리 초과 뜬다.
//재귀함수쓰면 스택사이즈 초과 뜬다.
//돌아가는 시간이 많이 걸리긴한다. 하지만 너무 지쳤어..


//실패작
// const solution = (input) => {
//   let [N, L] = input.shift().split(' ');
//   let [start, end] = input.pop().split(' ').map(e => Number(e));
//   let subway = input;

//   let obj = {};
//   let visited = new Set();

//   for (let i = 0; i < subway.length; i++) {
//     subway[i] = subway[i].split(' ').map(e => Number(e));
//     subway[i].pop();
//     let line = subway[i];
//     for (let j = 0; j < line.length; j++) {
//       let station = line[j];
//       if (station in obj) {
//         obj[station].push(i);
//         ;
//       } else {
//         obj[station] = [i];
//       }
//     }
//   }
//   let result = [];
//   let count = 0;

//   let stack = [...obj[start]];

//   const dfs = (stack, visited, start) => {
//     let line = stack.shift();
//     let here = start;
//     let idx = subway[line].indexOf(here);
//     if (idx === 0) {
//       for (let i = 0; i < subway[line].length; i++) {
//         if (subway[line][i] === end) {
//           result.push(count);
//           count = 0;
//           return;
//         }

//         if (obj[subway[line][i]].length > 1 && !visited.has(subway[line][i])) {
//           visited.add(subway[line][i]);
//           stack.unshift(...obj[subway[line][i]].filter(e => e !== line));
//           count += 1;
//           here = subway[line][i];
//           dfs(stack, visited, here);
//         }
//       }

//     } else {
//       for (let i = idx - 1; i >= 0; i--) {
//         if (subway[line][i] === end) {
//           result.push(count);
//           count = 0;
//           return;
//         }
//         if (obj[subway[line][i]].length > 1 && !visited.has(subway[line][i])) {
//           visited.add(subway[line][i]);
//           stack.unshift(...obj[subway[line][i]].filter(e => e !== line));
//           count += 1;
//           here = subway[line][i];
//           dfs(stack, visited, here);
//         }
//       }
//       for (let i = idx + 1; i < subway[line].length; i++) {
//         if (subway[line][i] === end) {
//           result.push(count);
//           count = 0;
//           return;
//         }
//         if (obj[subway[line][i]].length > 1 && !visited.has(subway[line][i])) {
//           visited.add(subway[line][i]);
//           stack.unshift(...obj[subway[line][i]].filter(e => e !== line));
//           count += 1;
//           here = subway[line][i];
//           dfs(stack, visited, here);
//         }
//       }
//     }
//   }
//   dfs(stack, visited, start);
//   return Math.min(...result);
// }
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// console.log(solution(input));