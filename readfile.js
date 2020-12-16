var fs = require('fs');
fs.readFile('file.txt',  (err, data)=> {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log('end');