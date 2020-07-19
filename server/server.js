const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const API_PORT = 3001
const DataStorageController = require('./DataStorageController')


app.get('/', function (req, res) {
  res.send('Hello World')
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

app.listen(API_PORT)
