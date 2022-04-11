const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });

const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('new chunk received:');
//     console.log(chunk);
//     writeStream.write('\nNew CHUNK');
//     writeStream.write(chunk);
// }   );

//pipe method
readStream.pipe(writeStream);