const http = require('http');
const { exec } = require('child_process');

const port = 80;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Vulnerability: Command Injection via user input
  const userFile = new URL(req.url, `http://${req.headers.host}`).searchParams.get('file');
  if (userFile) {
    exec(`cat ${userFile}`, (err, stdout) => {
      res.end(stdout || 'File not found\n');
    });
  } else {
    res.end('Hello World from microservice-a!\n');
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
