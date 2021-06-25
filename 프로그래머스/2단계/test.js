const solution = (input) => {
  const commands = {
    'BOOL': [1, new Array(8).fill(0).map((e, i) => e = i)],
    'SHORT': [2, [0, 2, 4, 6]],
    'FLOAT': [4, [0, 4]],
    'INT': [8, [0]],
    "LONG": [8, [0]]
  }

  let answer = [];
  let string = '';
  let temp_idx = 0;
  let idx = 0;
  for (let i = 0; i < input.length; i++) {
    let command = input[i];
    let [n, arr] = commands[command];
    console.log(command)
    console.log(arr)

    if (!arr.includes(temp_idx)) {
      let padding = n - (temp_idx % n);
      console.log('temp_idx', temp_idx)
      console.log(padding)
      temp_idx += padding;
      string += '.'.repeat(padding);
      console.log(string)
      i -= 1
    } else {
      if (command === 'LONG') {
        answer.push('#'.repeat(8))
        answer.push('#'.repeat(8))
        temp_idx = 0;
      } else {
        string += '#'.repeat(n);
        console.log(string)
        temp_idx += n;
      }
      // idx += 1
      // i -= 1;
    }

    if (temp_idx >= 8) {
      console.log(temp_idx)
      temp_idx = 0;
      answer.push(string);
      string = ''
    }
  }

  if (temp_idx !== 0) {
    string += '.'.repeat(8 - temp_idx);
    answer.push(string);
  } if (answer.length > 16) return 'HALT'
  console.log(answer)
  return answer.join(',');
}

solution(['INT', 'INT', 'BOOL', 'SHORT', 'LONG'])
solution(['INT', 'SHORT', 'FLOAT', 'INT', 'BOOL']);
solution(['FLOAT', 'SHORT', 'BOOL', 'BOOL', 'BOOL', 'INT'])