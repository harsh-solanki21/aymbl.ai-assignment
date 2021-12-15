const express = require('express')
const cors = require('cors')
const data = require('./data.json')

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

app.get('/get-data', (req, res) => {
  const items = data

  // Sort data by id
  items.sort((a, b) => {
    return a.id - b.id
  })

  res.json(items)
})

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`)
})
