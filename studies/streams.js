const fs = require('fs');
const { pipeline } = require('stream');
const readStream = fs.createReadStream('./docs/blog3.txt');
const writeStream = fs.createWriteStream('./docs/blog4.txt');

////reads the file and writes it to another file
// readStream.on('data', (chunk) => {
//     console.log("NEW CHUNK");
//     console.log(chunk.toString());
//     writeStream.write(chunk);
// });
///////////////////////////////////////////////////////
//pipe is a method that takes a stream and pipes it to another stream
readStream.pipe(writeStream);









