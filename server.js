const http = require('http');
const fs = require('fs');


// GET, POST, DELETE, PATCH
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type','text/html');
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'home.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path,(error, data) => {

        if(error) {
            console.log(error);
        }
        res.end(data);
    });
    
})

server.listen(3000, 'localhost',() => {
    console.log('server is running on port 3000');
})