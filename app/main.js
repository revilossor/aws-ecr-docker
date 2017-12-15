const app = require('express')()

app.use('/', (req, res) => {
  res.send({ hello: 'world' })
})

const listener = app.listen('3000', () => {
  console.log(`app listening on ${listener.address().port}`)
})
