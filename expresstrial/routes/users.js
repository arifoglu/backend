const express = require('express') // Express web server framework
const router = express.Router()

router.get('/', (req, res) => {
  res.send('About Page')
})

router.post('/', (req, res) => {
  res.send('Post new page')
})
router.get('/:id', (req, res) => {
  req.params.id
  res.send(`About Page with id ${req.params.id}`)
})
router.get('/new', (req, res) => {
  res.send(' new page')
})

module.exports = router
