
function solution(maps) {
  var answer = 1;
  let directionX = [-1, 1, 0, 0]
  let directionY = [0, 0, -1, 1]
  let visit = Array.from(Array(maps.length), () => Array(maps[0].length).fill(0));
  visit[0][0] = 1;

  let queue = [[0, 0]];
  while (queue.length) {
    let len = queue.length;
    for (let j = 0; j < queue.length; j++) {
      let [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let nextX = x + directionX[i];
        let nextY = y + directionY[i];
        if (nextX >= 0 && nextX < maps.length && nextY >= 0 && nextY < maps[0].length && maps[nextX][nextY] !== 0 && !visit[nextX][nextY]) {

          queue.push([nextX, nextY])
          visit[nextX][nextY] = 1;
          maps[nextX][nextY] = maps[x][y] + 1

        }
      }
    }

  }
  console.log(maps)
  answer = maps[maps.length - 1][maps[0].length - 1] !== 1 ? maps[maps.length - 1][maps[0].length - 1] : -1
  return answer;
}