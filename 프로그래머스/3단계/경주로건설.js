function solution(board) {
  const [dx, dy] = [[0, 0, -1, 1], [1, -1, 0, 0]]//상하좌우
  const len = board.length;
  const visited = Array.from(Array(len), () => new Array(len).fill(0));
  let queue = [[0, 0, 0, 0]]//x,y,direction,cost

  while (queue.length) {
    let [x, y, dir, cost] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= len || ny < 0 || ny >= len || board[nx][ny] === 1) continue;
      const d = i < 2 ? 0 : 1;
      const addCost = dir === d || (x === 0 && y === 0) ? 100 : 600;
      if (visited[nx][ny] === 0 || visited[nx][ny] >= cost + addCost) {
        visited[nx][ny] = cost + addCost;
        queue.push([nx, ny, d, cost + addCost])
      }

    }

  }
  return visited[len - 1][len - 1]

}