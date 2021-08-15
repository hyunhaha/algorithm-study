const solution = (subway, start, end) => {
  let obj = {};
  let visited = new Set();
  for (let i = 0; i < subway.length; i++) {
    subway[i] = subway[i].split(' ').map(e => Number(e));
    let line = subway[i];
    for (let j = 0; j < line.length; j++) {
      let station = line[j];
      if (station in obj) {
        obj[station].push(i);
        ;
      } else {
        obj[station] = [i];
      }
    }
  }
  console.log(obj)
  let result = [];
  let stack = [...obj[start]];
  // console.log(stack);

  let count = 0;
  const dfs = (stack, visited, start) => {
    console.log('start stack', stack)
    let line = stack.shift();
    let here = start;
    // visited.add(line + 1);
    console.log('line,stack', line, stack)
    let idx = subway[line].indexOf(here);
    if (idx === 0) {
      for (let i = 0; i < subway[line].length; i++) {
        // console.log('i', i)
        // console.log(subway[line][i]);
        // console.log(obj[subway[line][i]])
        // console.log(visited.has(subway[line][i]))

        if (subway[line][i] === end) {
          result.push(count);
          count = 0;
          // visited = new Set();
          return
        }
        if (obj[subway[line][i]].length > 1 && !visited.has(subway[line][i])) {
          visited.add(subway[line][i]);
          stack.unshift(...obj[subway[line][i]].filter(e => e !== line));
          count += 1;
          here = subway[line][i];
          console.log('idx=0 stack', stack)
          console.log('here', here)
          dfs(stack, visited, here)
        }
      }

    } else {
      for (let i = idx - 1; i >= 0; i--) {
        if (subway[line][i] === end) {
          result.push(count);
          count = 0;
          // visited = new Set();
          return;
        }
        if (obj[subway[line][i]].length > 1 && !visited.has(subway[line][i])) {
          visited.add(subway[line][i]);
          stack.unshift(...obj[subway[line][i]].filter(e => e !== line));
          count += 1;
          // console.log('stack', stack)
          here = subway[line][i];
          console.log('here', here)
          dfs(stack, visited, here)
        }
      }
      for (let i = idx + 1; i < subway[line].length; i++) {
        if (subway[line][i] === end) {
          result.push(count);
          count = 0;
          // visited = new Set();
          return;
        }
        if (obj[subway[line][i]].length > 1 && !visited.has(subway[line][i])) {
          visited.add(subway[line][i]);
          stack.unshift(...obj[subway[line][i]].filter(e => e !== line));
          count += 1;
          // console.log('stack', stack)
          here = subway[line][i];
          console.log('here', here)
          dfs(stack, visited, here)
        }
      }
    }
  }
  dfs(stack, visited, start)
  console.log('last stack', stack)
  console.log(count)
  console.log(result)
  return Math.min(...result)
}

let s1 = solution(["1 2 3 4 5 6 7 8", "2 11", "0 11 10", "3 17 19 12 13 9 14 15 10", "20 2 21"], 1, 9);
console.log(s1)
let s2 = solution(["1 2 3 4 5 6 7 8 9 10", "2 8"], 1, 10);
console.log(s2)
let s3 = solution(["0 1 2 3 4", "1 12 13 14"], 2, 12);
console.log(s3)