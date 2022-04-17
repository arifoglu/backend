const express = require('express');
const morgan    = require('morgan');

// Create an express app
const app = express();

//listen on port 3000
app.listen(3000, () => {
    console.log('express working on port 3000');
    });

//register the view engine
app.set('view engine', 'ejs');


//middleware 
app.use(express.static('public'));


app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
  });
  
  app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
  });
  app.use(morgan('dev'));

  app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });


app.get('/', (req, res) => {
    //res.send('<h1>Home page</h1>'); send html
    const blogs = [
        {title: 'Backend studies', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Backend comments', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Backend recommends', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', { title: 'Home', blogs });
});


app.get('/about', (req, res) => {
    //res.send('<h1>about page</h1>');
    res.render('about',{ title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create',{ title: 'Create A new Blog' });
});

//404 page
app.use((req, res, next) => {
    res.status(404).render('404',{ title: '404' });
});
