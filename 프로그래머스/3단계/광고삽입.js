const toSec = (str) => {
  let [h, m, s] = str.split(':');
  let result = 0;
  result += parseInt(h) * 60 * 60;
  result += parseInt(m) * 60;
  result += parseInt(s);
  return result;
}
const toStr = (n) => {
  let result = '';
  let s = n % 60;
  n = Math.floor(n / 60);
  let m = n % 60;
  n = Math.floor(n / 60);
  let h = n;

  if (h < 10) result += '0';
  result += h.toString();
  result += ':';
  if (m < 10) result += '0'
  result += m.toString();
  result += ':'
  if (s < 10) result += '0'
  result += s.toString();

  return result;
}
function solution(play_time, adv_time, logs) {
  var answer = "00:00:00";
  if (play_time === adv_time) return answer;

  let ad = new Array(360001).fill(0);

  for (let i = 0, logsL = logs.length; i < logsL; i++) {
    let [start, end] = logs[i].split('-');
    start = toSec(start);
    end = toSec(end);
    ++ad[start];
    --ad[end];
  }
  let totalLen = toSec(play_time);
  let adLen = toSec(adv_time);


  let maxSum = 0;
  let q = [];
  let idx = 0;

  for (let i = 1; i < totalLen; i++) {
    ad[i] += ad[i - 1];
  }
  for (let i = 1; i < totalLen; i++) {
    ad[i] += ad[i - 1];

  }
  maxSum = ad[adLen];

  for (let i = adLen + 1; i < totalLen; i++) {
    let temp = ad[i] - ad[i - adLen];
    if (maxSum < temp) {
      idx = i - adLen + 1;
      maxSum = temp
    }
  }
  answer = toStr(idx)
  return answer;
}

//테케 통과 못한 코드..

const toSec = (str) => {
  let [h, m, s] = str.split(':');
  let result = 0;
  result += parseInt(h) * 60 * 60;
  result += parseInt(m) * 60;
  result += parseInt(s);
  return result;
}
const toStr = (n) => {
  let result = '';
  let s = n % 60;
  n = Math.floor(n / 60);
  let m = n % 60;
  n = Math.floor(n / 60);
  let h = n;

  if (h < 10) result += '0';
  result += h.toString();
  result += ':';
  if (m < 10) result += '0'
  result += m.toString();
  result += ':'
  if (s < 10) result += '0'
  result += s.toString();

  return result;
}
function solution(play_time, adv_time, logs) {
  var answer = "00:00:00";
  if (play_time === adv_time) return answer;

  let ad = new Array(360000).fill(0);

  for (let i = 0, logsL = logs.length; i < logsL; i++) {
    let [start, end] = logs[i].split('-');
    start = toSec(start);
    end = toSec(end);

    for (let j = start; j < end; j++) {
      ad[j]++
    }
  }
  let totalLen = toSec(play_time);
  let adLen = toSec(adv_time);

  let sum = 0;
  let maxSum = 0;
  let q = [];
  let idx = 0;

  for (let i = 0; i < adLen; i++) {
    sum += ad[i];
    q.push(ad[i]);
  }
  maxSum = sum;

  for (let i = adLen; i < totalLen; i++) {
    sum += ad[i];
    q.push(ad[i])
    sum -= q.shift();

    if (sum > maxSum) {
      idx = i - adLen + 1;
      maxSum = sum
    }
  }
  answer = toStr(idx)
  return answer;
}