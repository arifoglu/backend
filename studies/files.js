const fs = require('fs')

//Read file
// fs.readFile('./docs/blog1.txt',(err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });
 //console.log('Deneme');
/////////////////////////////////////////////////////////////////////////////////////////////
//write file //
//if folder exists
// fs.writeFile('./docs/blog1.txt','BONJOUR',(err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File written');
// });

//if file not exist, it will create a new file
// fs.writeFile('./docs/blogNEW.txt','hallo',(err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File created with success');
// });

//directories
// if directory not exist, it will create a new directory
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
/////////////////////////////////////////////////////////////////////////////////////////////
//delete file   
if(fs.existsSync('./docs/deneme2')){
    fs.unlink('./docs/deneme2', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('File deleted with success')
    })
}
