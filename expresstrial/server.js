const express = require('express'); // Express web server framework
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    console.log('Hello World');  
    res.send('Hello World');
});

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000) 