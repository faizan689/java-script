const { createServer } = require('http');
const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
