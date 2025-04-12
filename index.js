const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js CI/CD app!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
