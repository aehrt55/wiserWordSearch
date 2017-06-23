module.exports = function(board, word) {
  const visited = [];
  const search = ([rowIndex, columnIndex], position = 0) => {
    if (position >= word.length) return true;
    if (rowIndex < 0 || rowIndex >= board.length) return false;
    if (columnIndex < 0 || columnIndex >= board[rowIndex].length) return false;
    if (visited[rowIndex][columnIndex]) return false;
    if (board[rowIndex][columnIndex] !== word.charAt(position)) return false;
    visited[rowIndex][columnIndex] = true;
    position++;
    if (!(search([rowIndex - 1, columnIndex], position) || search([rowIndex + 1, columnIndex], position) || search([rowIndex, columnIndex - 1], position) || search([rowIndex, columnIndex + 1], position))) {
      visited[rowIndex][columnIndex] = false;
      return false;
    }
    return true;
  };
  for (let i = 0; i < board.length; i++) {
    visited[i] = [];
    for (let j = 0; j < board[i].length; j++) {
      visited[i][j] = false;
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (search([i, j])) return true;
    }
  }
  return false;
};
