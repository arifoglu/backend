 import express from 'express'
 import deneme  from './deneme.js'

const app = express();
const port = 3001

app.use(deneme);

app.get('/', (req, res) => {
  res.send('Home!')
})
app.get('/about',(req, res) => {
  res.send('About!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})