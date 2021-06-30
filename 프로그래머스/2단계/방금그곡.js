function solution(m, musicinfos) {
  var answer = [];
  let mm = m.replace(/(\D)#/g, (s, p) => p.toLowerCase());
  let mmusicinfos = musicinfos.map(e => {
    const info = e.split(',');
    const code = info[3].replace(/(\D)#/g, (s, p) => p.toLowerCase());
    return [info[0], info[1], info[2], code];
  });
  console.log(mm);
  console.log(mmusicinfos);
  for (let i = 0; i < mmusicinfos.length; i++) {
    let [start, end, title, code] = mmusicinfos[i];
    let playTime = Time(start, end);
    let playCode = Code(playTime, code);
    if (playCode.includes(mm)) {
      answer.push([title, playTime]);
    }
  }
  if (answer.length === 0) {
    return `(None)`;

  } else {
    answer.sort((a, b) => {

      return b[1] - a[1];
    });

    return answer[0][0];
  }

}
function Code(playTime, code) {
  let multiple = Math.floor(playTime / code.length);
  let remainder = playTime % code.length;
  let result = '';
  console.log(multiple, remainder);
  for (let i = 0; i < multiple; i++) {
    result += code;
  }
  for (let i = 0; i < remainder; i++) {
    result += code[i];
  }
  return result;
}
function Time(start, end) {
  const [startH, startM] = start.split(':');
  const [endH, endM] = end.split(':');
  let minute = 0;
  if (endH - startH >= 1) {
    minute += 60 * (endH - startH);
  }
  if (startM > endM) {
    minute -= Math.abs(endM - startM);
  } else {
    minute += Math.abs(endM - startM);
  }

  return minute;
}

///////////////////////////////////////////
function solution(m, musicinfos) {
  var answer = [];
  let mm = m.replace(/(\D)#/g, (s, p) => p.toLowerCase());

  const getCode = (code, n) => {
    let temp = '';
    for (let i = 0; i < Math.floor(n / code.length); i++) temp += code;
    for (let i = 0; i < n % code.length; i++)temp += code[i];

    return temp;
  }
  const getPlayTime = (start, end) => {
    let [sh, sm] = start.split(':');
    let [eh, em] = end.split(':');
    let m = 0;
    if (eh - sh >= 1) m += (eh - sh) * 60;
    if (sm > em) {
      m -= Math.abs(em - sm);
    } else {
      m += Math.abs(em - sm);
    }
    return m;
  }
  for (let i = 0; i < musicinfos.length; i++) {
    let [start, end, title, code] = musicinfos[i].split(',');

    code = code.replace(/(\D)#/g, (s, p) => p.toLowerCase());

    // let [sh,sm]=start.split(':');
    // let [eh,em]=end.split(':');
    // let playTime=(eh*60+em)-(sh*60+sm);
    let playTime = getPlayTime(start, end);
    let playCode = getCode(code, playTime);
    if (playCode.includes(mm)) {
      answer.push([title, playTime]);
    }
  }
  if (answer.length === 0) return '(None)';
  answer.sort((a, b) => { b[1] - a[1] })
  return answer[0][0];
}



function solution(m, musicinfos) {
  var answer = [];
  let mm = m.replace(/(\D)#/g, (s, p) => p.toLowerCase());
  const getCode = (code, n) => {
    let temp = '';
    for (let i = 0; i < Math.floor(n / code.length); i++) temp += code;
    for (let i = 0; i < n % code.length; i++)temp += code[i];

    return temp;
  }
  const getPlayTime = (s, e) => {
    let [sh, sm] = s.split(':');
    let [eh, em] = e.split(':');
    let m = 0;
    if (eh - sh >= 1) {
      m += (eh - sh) * 60;
    }
    if (sm > em) {
      m -= Math.abs(em - sm);
    } else {
      m += Math.abs(em - sm);
    }
    return m;
  }

  for (let i = 0; i < musicinfos.length; i++) {
    let [start, end, title, code] = musicinfos[i].split(',');

    let codeT = code.replace(/(\D)#/g, (s, p) => p.toLowerCase());

    let playTime = getPlayTime(start, end);
    let playCode = getCode(codeT, playTime);
    if (playCode.includes(mm)) {
      answer.push([title, playTime]);
    }
  }
  if (answer.length === 0) {
    return `(None)`;
  }
  answer.sort((a, b) => b[1] - a[1]);
  return answer[0][0]

}
