const http = require('http');

const port = 3001;
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {
    //res.statusCode = 201;
    
    if(req.url === '/'){
        res.statusCode = 200;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("Home page");
    res.end();
     }
    if(req.url === '/about'){
    res.statusCode = 200;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("About page");
    res.end();
   }
    else{
    res.statusCode = 200;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("404 nicht finden");
    res.end();
   }

})

server.listen(port,hostname, () => {
    console.log(`bu server ${port} portunda calisiyor`)
})