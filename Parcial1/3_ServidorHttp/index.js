var http = require('http');

let server = http.createServer(function (req, res) {
    // res.writeHead(200, {'access-control-allow-origin': '*'});
    res.end('Hello World!');
    });
    
server.listen(3001), () => {
        console.log('Servidor Corriendo localhost:3001');
    }