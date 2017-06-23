# Word Search
Given a 2D board and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cell, where adjacent cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

## Usage
    npm install @xin55/wiser-word-search
then

    const wordSearch = reuqire('@xin55/wiser-word-search');
    assert(wordSearch([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED') === true);
    assert(wordSearch([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ASADB') === false);

## Input
The board to be used may be hard coded as:

    [
      [ABCE],
      [SFCS],
      [ADEE],
    ]

Your program should accept as its first argument a path to a filename. Each line in this file contains a word. E.g.

ASADB
ABCCED
ABCF

## Output
Print out True if the word exists in the board, False otherwise. E.g
False
True
False

