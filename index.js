const fs = require('fs');
const wordSearch = require('lib');
const filePath = process.argv[2];

if (!filePath) {
  console.error('path cannot be empty');
  return;
}

const BOARD = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];

const search = word => wordSearch(BOARD, word);
const log = bool => console.log(bool ? 'True' : 'False');

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error('invalid file path');
    return;
  }
  if (!stats.isFile()) {
    console.error('path should be a file');
    return;
  }
  require('readline').createInterface({
    input: fs.createReadStream(filePath),
  })
  .on('line', word => log(search(word)));
});

