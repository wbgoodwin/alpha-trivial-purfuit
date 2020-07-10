const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())

const API_PORT = 3001

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(API_PORT)
