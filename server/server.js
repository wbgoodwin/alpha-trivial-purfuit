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

app.get('/', function(req, res) {
  res.json('Hello world')
})

app.get('/questions', async function(req, res) {
  const data = await DataStorageController.exportQuestionList()
  res.json(data)
})

app.get('/categories', async function(req, res) {
  const data = await DataStorageController.exportCategoryList()
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

app.get('/question/:questionID', async function(req, res) {
  const data = await DataStorageController.getQuestion(req.params.questionID)
  return res.json(data)
})

app.get('/readQuestion/:categoryID', async function(req, res) {
  const data = await DataStorageController.readAQuestion(req.params.categoryID)
  return res.json(data)
})

app.get('/getRandomQuestionByCategory/:categoryName', async function(req, res) {
  const data = await DataStorageController.getRandomQuestionByCategory(req.params.categoryName)
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
