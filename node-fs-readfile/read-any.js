const fs = require('fs');

// fs.readFile('./hopper.txt', 'utf8');
// const argv = require('node:process');

console.log(process.argv[2]);

const file = process.argv[2];
fs.readFile(file, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// argv.argv.forEach((idx, val) => {
//   console.log(idx[2]);
// });
