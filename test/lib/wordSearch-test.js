const wordSearch = require('lib/wordSearch');
const assert = require('chai').assert;

describe('Board: [\n\
    [ABCE],\n\
    [SFCS],\n\
    [ADEE],\n\
  ]', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ];
  it('should return false when word is ASADB', () => {
    const word = 'ASADB';
    assert(wordSearch(board, word) === false, 'board doesn\'t contains ' + word);
  });
  it('should return true when word is ABCCED', () => {
    const word = 'ABCCED';
    assert(wordSearch(board, word) === true, 'board should contains ' + word);
  });
  it('should return false when word is ABCF', () => {
    const word = 'ABCF';
    assert(wordSearch(board, word) === false, 'board doesn\'t contains ' + word);
  });
})
