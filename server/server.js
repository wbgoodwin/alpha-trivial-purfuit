const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
require('dotenv-safe').config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

const API_PORT = 3001
const DataStorageController = require('./DataStorageController')

if (process.env.environment === 'production') {
  app.use(express.static(path.join(__dirname, 'build')))
}
else {
  app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/questions', function(req, res) {
  const data = DataStorageController.exportQuestionList()
  res.json(data)
})

app.get('/categories', function(req, res) {
  const data = DataStorageController.exportCategoryList()
  res.json(data)
})

app.post('/newQuestion', function(req, res) {
  DataStorageController.addNewQuestion(
    req.body.categoryID, req.body.question, req.body.correctAnswer,
    req.body.incorrectAnswer1, req.body.incorrectAnswer2,
    req.body.incorrectAnswer3
  )
  res.json({success: true})
})

app.post('/deleteQuestion', function(req, res) {
  DataStorageController.deleteQuestion(req.body.id)
  res.json({success: true})
})

app.post('/editQuestion', function(req, res) {
  DataStorageController.editQuestion(
    req.body.questionID, req.body.categoryID, req.body.question,
    req.body.correctAnswer, req.body.incorrectAnswer1,
    req.body.incorrectAnswer2, req.body.incorrectAnswer3
  )
  res.json({success: true})
})

app.get('/question/:questionID', function(req, res) {
  const data = DataStorageController.getQuestion(req.params.questionID)
  return res.json(data)
})

app.get('/readQuestion/:categoryID', function(req, res) {
  const data = DataStorageController.readAQuestion()
  return res.json(data)
})

app.post('/updateCategories', function(req, res) {
  DataStorageController.updateCategories(req.body.categories)
  res.json({success: true})
})

app.post('/uploadQuestionFile', function(req, res) {
  DataStorageController.uploadQuestionFile(req.body.questions)
  res.json({success: true})
})

app.listen(API_PORT)
