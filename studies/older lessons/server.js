const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
  
  //lodash
  const num = _.random(0, 20);
  console.log(num);
 const greet = _.once(() => {
    console.log('Hello');
  });
  greet();

  res.setHeader('Content-Type', 'text/html')

  let path = './views/'
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
      case '/about-us':
      res.statusCode = 300;
      res.setHeader('Location', '/about');
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  //press to screen
  // res.write('<h1>Hello World</h1>');
  // res.end();
  //////

  //send html file
  fs.readFile( path, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      res.end(data)
    }
  })
})

server.listen(3000, 'localhost', () => {
  console.log('server is listening on port 3000')
})
