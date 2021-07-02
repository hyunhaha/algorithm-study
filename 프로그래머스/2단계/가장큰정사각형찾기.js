function solution(board) {
  var answer = 0;
  if (board.length === 1 || board[0].length === 1) return 1;
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[i].length; j++) {
      if (board[i][j] > 0) {
        board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
      } if (board[i][j] > answer) {
        answer = board[i][j]
      }
    }
  }
  return answer * answer;
}