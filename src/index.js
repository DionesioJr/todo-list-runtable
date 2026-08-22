import http from 'node:http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Todo List rodando.');
});

server.listen(PORT, () => {
  console.log(`Todo List ouvindo em http://localhost:${PORT}`);
});
