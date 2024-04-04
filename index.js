// timeout_vs_immediate.js
const fs = require('node:fs');

fs.readFile("./file.txt", (err,data) => {
    console.log(err,"err")
    console.log(data.toString(),"data")
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
