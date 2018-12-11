var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Running Proxy sevrer...');
  res.end();
}).listen(7777);