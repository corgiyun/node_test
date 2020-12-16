var http = require('http');

http.createServer((req, res)=> {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1> Node.js </h1>');
  res.write('<h3> Node.js3 </h3>');
  res.end('<p>Hello World</p>')
}).listen(3000);

console.log('HTTP Server is listening at port 3000.');