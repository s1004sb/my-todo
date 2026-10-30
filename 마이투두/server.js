const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
// 127.0.0.1에서만 열어서 이 컴퓨터 밖에서는 접속할 수 없게 한다.
const HOST = '127.0.0.1';
const file = path.join(__dirname, 'index.html');

http.createServer((req, res) => {
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(500); return res.end('error'); }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
}).listen(PORT, HOST, () => console.log(`http://localhost:${PORT}`));
