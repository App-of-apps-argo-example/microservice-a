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
// pull-model test 2026-05-28