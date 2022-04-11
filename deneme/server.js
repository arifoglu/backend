const http = require('http');
const fs = require('fs');   

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)
  //set the response header
  res.setHeader('Content-Type', 'text/html')
  //send the response body as a stream
fs.readFile('./index.html', (err, data) => {
    if (err) {
        console.log(err);
        res.end(); }
    else {  
        res.write(data);
        res.end(data);
    });
});             

server.listen(3000, 'localhost', () => {
  console.log('server is running on port 3000')
})

// const server = http.createServer((req, res) => {
//   console.log(req.url,  req.method)
//     res.setHeader('Content-Type', 'text/html');
//     res.write('Hello World');
//     res.write('<h1>Hello World</h1>');
//     res.end();
// })
// server.listen(3000, 'localhost', () => {
//   console.log('server is running on port 3000')
// })

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.end('Hello World')
//   })
//   .listen(3000, 'localhost', () => {
//     console.log('server is running on port 3000')
//   })
