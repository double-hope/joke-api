const http = require('http');
const { getAllJokes, addJoke } = require('./jokesController');

const server = http.createServer((req, res) => {
    if(req.url === '/jokes' && req.method == 'GET') {
        getAllJokes(req, res);
    } else if(req.url === '/jokes' && req.method == 'POST') {
        addJoke(req, res);
    }  else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3001, () => {
    console.log('Server is running on port 3001...');
});

