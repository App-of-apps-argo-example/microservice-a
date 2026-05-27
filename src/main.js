const http = require('http');

const port = 80;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from microservice-a!\n');
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
// test change Wed May 27 11:29:38 PDT 2026
// trigger 1779910313
