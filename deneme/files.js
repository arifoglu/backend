const fs = require('fs')

// Read file
// fs.readFile('./docs/blog1.txt',(err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('Deneme');

//write file
// fs.writeFile('./docs/blog1.txt','hello world',(err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File created with success');
// });
// fs.writeFile('./docs/blog2.txt','hello again',(err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File created with success');
// });

//directories
// if (!fs.existsSync('./docs/deneme2')) {
//   fs.mkdir('./docs/deneme2', (err) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log('Directory created with success')
//   })
// } else {
//   fs.rmdir('./docs/deneme2', (err) => {
//     if (err) {
//       console.log('Directory already exists')
//     }
//   })
// }

//delete file   
// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('File deleted with success')
//     })
// }
