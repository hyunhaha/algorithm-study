function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let bridge = new Array(bridge_length).fill(0);
  let count = 0;
  let now = truck_weights.shift();
  count += now;
  bridge.push(now);
  bridge.shift();
  answer++;
  while (count) {
    count -= bridge.shift();
    now = truck_weights.shift();
    if (count + now <= weight) {
      count += now;
      bridge.push(now);
    } else {
      truck_weights.unshift(now);
      bridge.push(0)
    }
    answer++
  }

  return answer;
}