const http = require('http');


const server = http.createServer((req, res) => {
   
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('ini adalah halaman home');
    } else if (req.url === '/product') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('ini halaman product');
    } else if (req.url === '/order') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('ini adalah order')
    }
})


const port=3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
